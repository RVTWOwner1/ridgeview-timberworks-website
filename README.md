# Ridgeview Timberworks Website Draft

Static website draft for Ridgeview Timberworks.

## Netlify

This folder can be connected directly to Netlify from GitHub.

- Build command: leave blank
- Publish directory: `.`

## Editing Website Copy

The editable website wording lives in `content/site.json`.

Once Netlify Identity and Git Gateway are enabled for the Netlify site, editors can use Decap CMS here:

https://ridgeview-timberworks-preview.netlify.app/admin/

The CMS edits the same `content/site.json` file and saves the change back to GitHub. Netlify then redeploys the site from GitHub.

Required Netlify settings:

- Enable Identity for the site
- Set registration to invite only
- Enable Git Gateway under Identity services
- Invite editor users under Identity
