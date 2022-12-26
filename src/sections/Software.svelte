<script lang="ts">
  import { Octokit } from '@octokit/core';
  import { version } from '../../package.json';

  const gh = new Octokit({ userAgent: `mattmanzi-ui/v${version}` });

  const prsPromise = gh.request('GET /search/issues', {
    q: ['is:pr', 'author:imyourmanzi', '-user:imyourmanzi'].join('+'),
    per_page: 3,
    sort: 'updated',
    order: 'desc',
  });

  const issuesPromise = gh.request('GET /search/issues', {
    q: ['is:issue', 'author:imyourmanzi', '-user:imyourmanzi'].join('+'),
    per_page: 1,
    sort: 'updated',
    order: 'desc',
  });
</script>

<template>
  <div id="softwareContainer" class="container">
    <h1>Software</h1>
    <h2>Projects</h2>
    <h3>Spotify Playlist Manager</h3>
    <h3>Fig Tree</h3>
    <h3>Valley Match</h3>
    <h2>Open Source</h2>
    <div id="ossContainer">
      <div id="recentPrs">
        <h3>Recent PRs</h3>
        {#await prsPromise}
          <div id="prLoading"></div>
        {:then prs}
          {#each prs.data.items as pr}
            <div class="pr">
              <span class="prIcon">
                {#if pr.state === 'closed' && pr.pull_request?.merged_at != null}
                  <i class="fa-solid fa-code-merge fa-fw fa-2x" style="color: blueviolet"
                  ></i>
                {:else if pr.state === 'closed' && pr.pull_request?.merged_at == null}
                  <span class="fa-stack fa-fw" style="color: firebrick">
                    <i class="fa-solid fa-code-pull-request fa-stack-2x"></i>
                    <i class="fa-solid fa-xmark fa-stack-1x" style="top: 1px"></i>
                  </span>
                {:else if pr.state === 'open'}
                  <i
                    class="fa-solid fa-code-pull-request fa-fw fa-2x"
                    style="color: green"></i>
                {/if}
              </span>
              <span>
                <a class="customLink" href="{pr.html_url}">
                  <p class="prTitle">{pr.title}</p>
                </a>
                <p class="prPreview"></p>
              </span>
            </div>
          {/each}
        {:catch}
          <div>Try again later</div>
        {/await}
      </div>
      <div id="prsCount">
        <p>
          {#await prsPromise}
            &nbsp;
          {:then prs}
            {prs.data.total_count}
          {:catch}
            <div>Try again later</div>
          {/await}
        </p>
      </div>
      <div id="issuesCount">
        <p>
          {#await issuesPromise}
            &nbsp;
          {:then issues}
            {issues.data.total_count}
          {:catch}
            <div>Try again later</div>
          {/await}
        </p>
      </div>
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

    display: flex;
    flex-direction: column;
    margin: 0.3rem;
    padding: 0 0.5rem;

    text-align: left;
    background-image: linear-gradient(rgb(254, 254, 254), rgb(252, 252, 252));
  }

  .pr {
    display: flex;
    margin: 0.5rem 0;

    border: 2px solid rgb(192, 192, 192);
  }

  .pr span {
    display: inline-block;
  }

  .prIcon {
    margin: 0.5rem;
  }

  .prTitle {
    margin-top: 0.25rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  #prsCount {
    grid-column: 2;
    grid-row: 1;

    margin: 0.3rem;

    background-image: linear-gradient(rgb(255, 255, 255), rgb(252, 252, 252));
  }

  #issuesCount {
    grid-column: 2;
    grid-row: 2;

    margin: 0.3rem;

    background-image: linear-gradient(rgb(255, 255, 255), rgb(252, 252, 252));
  }
</style>
