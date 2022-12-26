<script lang="ts">
  import { Octokit } from '@octokit/core';
  import { version } from '../../package.json';

  const gh = new Octokit({ userAgent: `mattmanzi-ui/v${version}` });

  const prsPromise = gh
    .request('GET /search/issues', {
      q: ['is:pr', 'author:imyourmanzi', '-user:imyourmanzi'].join('+'),
      per_page: 3,
      sort: 'updated',
      order: 'desc',
    })
    .then((prs) => {
      console.dir(prs);
      return prs;
    });

  const issuesPromise = gh
    .request('GET /search/issues', {
      q: ['is:issue', 'author:imyourmanzi', '-user:imyourmanzi'].join('+'),
      per_page: 1,
      sort: 'updated',
      order: 'desc',
    })
    .then((issues) => {
      console.dir(issues);
      return issues;
    });
</script>

<template>
  <div id="softwareContainer" class="container">
    <h1>Software</h1>
    <h2>Projects</h2>
    <h2>Open Source</h2>
    <div id="ossContainer">
      <div id="recentPrs">
        <ul>
          {#await prsPromise}
            <li></li>
          {:then prs}
            {#each prs.data.items as pr}
              <li class="pr">
                <div>
                  <p class="prTitle">{pr.title}</p>
                  <p class="prPreview"></p>
                </div>
              </li>
            {/each}
          {/await}
        </ul>
      </div>
      <div id="prsCount">
        {#await prsPromise}
          <p>&nbsp;</p>
        {:then prs}
          <p>{prs.data.total_count}</p>
        {/await}
      </div>
      {#await issuesPromise}
        <div id="issuesCount">
          <p>&nbsp;</p>
        </div>
      {:then issues}
        <div id="issuesCount">
          <p>{issues.data.total_count}</p>
        </div>
      {/await}
    </div>
  </div>
</template>

<style>
  #softwareContainer {
    text-align: center !important;
  }

  #ossContainer {
    display: grid;
    grid-template-columns: 85% 15%;
    grid-template-rows: 1fr 1fr;
  }

  #recentPrs {
    grid-column: 1;
    grid-row: 1 / 3;

    text-align: left;
  }

  #recentPrs > ul {
    list-style-type: none;
  }

  #prsCount {
    grid-column: 2;
    grid-row: 1;
  }

  #issuesCount {
    grid-column: 2;
    grid-row: 2;
  }
</style>
