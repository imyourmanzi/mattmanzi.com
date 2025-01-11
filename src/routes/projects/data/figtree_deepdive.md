Since my earliest server admin days (all the way back in high school!), I maintained a simple set of configuration files that I would copy to new server instances. In the years following, the number and complexity of these configurations grew and I began researching solutions. However, in 2020, I was bright-eyed and bushy-tailed. After graduating during COVID quarantine and securing my first post-graduation job, I had too much time on my hands.

I decided to build my own, custom configuration management tool. Fig Tree—a “tree” of configurations—houses all of my default shell and related program configuration files. But it goes beyond a simple dotfiles repository because it solves two problems for me.

1. My system automatically installs configurations exactly where they need to go using a simple interactive script.
2. Edge cases, like missing programs or differences between operating systems, are handled automatically (and as a result, more predictably).

With this system, I’ve built a utility that I can pull down onto almost any macOS or Debian-based machine and recreate a familiar terminal environment for Bash or Zsh in seconds.

### Naming Scheme

Fig Tree uses the analogy of tending to a flower garden as a device for organizing the two types of configuration files: annuals and perennials. Annuals are configurations for a shell environment that are, by nature, loaded each time a new interactive shell is spawned, ergo they must be “planted” each time. An example of this is creating more feature-rich aliases for `ls` in a **.bashrc** file. On the other hand, perennials are configurations for other tools that only need to be loaded once. For example, a **.vimrc** file only needs to be added to the user’s home directory once. Additionally, there are a number of other playfully-named aspects of the project that adhere to the theme.
