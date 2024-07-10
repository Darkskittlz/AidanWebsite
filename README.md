## To Do

- Add contact page to the bottom of the home page
- Delete Bookings
- EPK Page 
  - Link to PDF or google Doc




***
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
## Getting started

1. [Install this template in Cosmic](https://www.cosmicjs.com/marketplace/templates/agency).

2. Download this code repository and install the dependencies.

```bash
git clone https://github.com/cosmicjs/agency-template
cd agency-template
bun install
```

3. Create a `.env.local` file with your Cosmic API keys. Find these after logging in to the Cosmic dashboard in [Project > API keys](https://app.cosmicjs.com/?redirect_to=?highlight=api-keys).

```
cp .env.example .env.local
```

It will look like this:

```
# .env.local
COSMIC_BUCKET_SLUG=change_to_your_bucket_slug
COSMIC_READ_KEY=change_to_your_bucket_read_key
COSMIC_WRITE_KEY=change_to_your_bucket_write_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=change_to_your_stripe_public_key
STRIPE_SECRET_KEY=change_to_your_stripe_secret_key
```

4. Run the template.

```
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

Use the following button to deploy to Vercel. You will be asked to add API accesss keys as environment variables.

<a href="https://vercel.com/import/git?c=1&s=https://github.com/cosmicjs/agency-template&env=COSMIC_BUCKET_SLUG,COSMIC_READ_KEY,COSMIC_WRITE_KEY" rel="noopener noreferrer" target="_blank"><img src="https://cdn.cosmicjs.com/d3f0d5e0-c064-11ea-9a05-6f8a16b0b14c-deploy-to-vercel.svg" style="width: 100px;" class="fr-fic fr-dib fr-fil"></a>

## License

Licensed under the [MIT license](https://github.com/cosmicjs/agency-template/blob/main/LICENSE).
