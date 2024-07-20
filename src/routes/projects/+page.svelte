<script lang="ts">
  import Project from './Project.svelte';
</script>

<div>
  <h1>Projects</h1>

  <Project
    name="One"
    description="{{
      solution: 'website',
      technology: 'server',
      takeaways: 'money'
    }}"
    imageSource="img/social_in.png"
    imageAltText="alt text"
  >
    <div slot="deepDive">
      <p>
        the first project has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
        consectetur, from a <strong
          >Lorem Ipsum passage, and going through the cites of the word in classical
          literature, dis</strong
        >covered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
        1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
        popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
        sit amet.., comes from a line in section 1.10.32. The
      </p>
    </div>
  </Project>

  <Project
    name="two"
    description="{{
      solution: 'website2',
      technology: 'server2',
      takeaways: 'money2'
    }}"
    imageSource="img/social_git.svg"
    imageAltText="alt text"
  />
</div>
