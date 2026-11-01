# GrammarSpace — GitHub Pages

The first visit must be online so the browser can cache the app and all bundled lessons. Keep the tab open until installation finishes; later visits and lessons can work offline. Browser storage must be enabled. External links and the optional Google font still require internet; a fallback font is available. Progress remains in the browser and is not synced between devices.

## Local preview

Run `python -m http.server 8000` from this folder and open `http://localhost:8000/`. To simulate a Pages subpath, serve the parent directory and visit `/GrammarSpace-pages/`. Use HTTP localhost or HTTPS: opening index.html directly does not enable offline caching or ES modules reliably.

## Publish

Create an empty GitHub repository, then run inside this folder (replace USERNAME and REPOSITORY):

```sh
git init
git add .
git commit -m "Prepare GrammarSpace for GitHub Pages"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

In the repository open Settings → Pages → Build and deployment; choose Deploy from a branch, select main and /(root), then Save. Visit `https://USERNAME.github.io/REPOSITORY/` once deployment completes. See https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site.

If the remote already has commits, integrate its history before pushing; never force push blindly. To update a previously published copy, commit your changes and push main.
