### Foreword

This project isn’t a clone of `iptables` or native file system ACLs. Instead, it’s a tool to let sysadmins (i.e. `root`) block files and network communications at a kernel level so that not even `root` can access them without first unblocking the resource. It denies access to sending & receiving UDP & TCP communications via IPv4 & IPv6 for specified port numbers and access to individual files (i.e. [inodes](https://unix.stackexchange.com/questions/4402/what-is-a-superblock-inode-dentry-and-a-file)). The project’s ultimate goal was to utilize the elegance of Linux—everything is a file—and locate a single “nexus point” in the kernel where a “blocked/not blocked?” check could be placed to handle all of the requirements.

This project was one of the most difficult, yet rewarding, I've ever worked on. It gave me a whole new appreciation for operating systems and software. Despite my receiving 105% on this assignment (due to extra credit and a curve), I did not meet all the requirements of the assignment. I plan to return to this project one day and accomplish this goal. When I do, I’ll add a full write-up here.

However, in the meantime. I’d like to talk about…

### Test Suites

Believe it or not, tests (yes, the ones you see above) are what earned me extra credit on this project. While it wasn’t a requirement to have a formal test system for all the different use cases that the system would have to block, it was generally understood that there were a number of possibilities, and not all of them immediately obvious.

One day during my work on this project, when I was sick of exploring the endless function call stacks related to file management, I decided to write down some of the potential scenarios that I’d eventually need to check if I ever got this thing working. It started as a just a list of commands in a text file but I quickly realized I could do the same thing in a shell script and then run it all at once. Of course, anyone that’s done this once before knows that with more than a few commands, your script output quickly gets difficult to follow. So you probably try redirecting to `> /dev/null` and now you have no idea what happened unless there was an error. But the errors are helpful in checking if something like the `cat` command failed, it’s just annoying to read all that. My monkey brain wants bright, shiny colors!

Before I knew it, I had written my own custom assertion library in C for simple numerical and string comparisons that I could utilize completely from a shell invocation. I could then write as many test commands into as many shell scripts I liked and after each I only needed to run one extra command and see a uniform output.

I’ve reproduced select excerpts of the test code here to demonstrate its simplicity.

<div class="multiColumn">
<div>

```c
char* strassert(int passed) {

  if (passed) {
    return "\033[38;5;47mPassed\033[0m";
  }

  return "\033[38;5;160;1mFailed\033[0m";
}

int assertl(const char *test, long actual, long expected) {
  int passed = (actual == expected);
  printf("[ %s ] %s", strassert(passed), test);
  printf(" (E=%ld :: A=%ld)\n", expected, actual);
  return passed;
}

int main(int argc, char *argv[]) {

  if (argc < 4) {
    fprintf(stderr, "Usage: %s <test> <actual> <expected>\n", argv[0]);
    return -1;
  }

  unsigned long actual = strtoul(argv[2], NULL, 10);
  unsigned long expected = strtoul(argv[3], NULL, 10);

  return assertl(argv[1], actual, expected);
}
```

</div>
<div>

```bash
#!/bin/bash
block_file="$(pwd)/block_me"

# create a file to block
echo "You can't block me!" > "$block_file"

${DRIVERS}fc421_block_file "$block_file"
./assertl "Block file" "$?" "0"

cat "$block_file"
./assertl "\`cat\` blocked file fails" "$?" "1"

ls -l "$block_file"
./assertl "\`ls -l\` of blocked file fails" "$?" "2"

stat "$block_file"
./assertl "\`stat\` blocked file fails" "$?" "1"

rm "$block_file"
./assertl "\`rm\` blocked file fails" "$?" "1"

# unblock the files
${DRIVERS}fc421_unblock_file "$block_file"
./assertl "Unblock file" "$?" "0"

# reset
${DRIVERS}fc421_reset
rm "$block_file"
```

</div>
</div>

Once I got started, it was easy to keep adding tests. Eventually I had a formidable army of shell scripts all running in concert under a couple Makefile commands. In the test output, you can see that there’s one of my tests that fails—the ability to block symbolic links. Despite the failure, because I was essentially able to display it in such a neat and tidy manner, I landed the coveted extra credit.
