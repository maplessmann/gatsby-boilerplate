# Gatsby Boilerplate

🚀 A boilerplate to help you create scalable and fast websites

## Features

- PWA ready
- SEO
- Build time and runtime data fetching
- Modern JavaScript
- Fast build time (~ 1 min)
- Google Analytics integration
- Accessibility best practices

## Performance score

![image](https://user-images.githubusercontent.com/12679778/102672408-7977c600-416f-11eb-8eb7-05401732b5c4.png)

## Getting Started

Clone this repository

```bash
git clone git@github.com:maplessmann/gatsby-boilerplate.git
```

Install dependencies

```bash
# Via NPM:
npm install

# Via Yarn:
yarn
```

For the build time data fetching example to work, you'll need to create a `.env` file in the root directory with your github token:

```bash
touch .env
```

Open the file and add the GITHUB_TOKEN variable

```
GITHUB_TOKEN=<YOUR_GITHUB_TOKEN>
```

See how to create an access token in the [GitHub's documentation](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token). You'll need to set the scope `read:user` for this example.

Run the project

```bash
# Via NPM:
npm run start

# Via Yarn:
yarn start
```

Open the local server at `localhost:8000`
