module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.png`,
        siteTitle: `Portfolio`,
        siteUrl: `https://jcc.gatsbyjs.io`,
        siteName: `Jake Cox Portfolio`,
        siteShortName: `JCC`,
        siteDescription: `This spiffy website contains information about my work experience as a software engineer. Credit to @christiandavid for this amazing template.`,
        siteKeywords: `Full Stack Developer, Software Engineer`,
        siteTheme: `#000`,
        useMozJpeg: true,
        menuLinks: [
          // title = Link text
          // color = Animation background color on click
          { name: `home`, title: `Home`, color: `#000`, link: `` },
          {
            name: `experience`,
            title: `Experience`,
            color: `#3a3d98`,
            link: ``,
          },
          { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
          { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
        ],
        email: `jcodycox86@gmail.com`,
        social: {
          // Usernames
          twitter: `rooddotcom`,
          gitHub: `jcox86`,
          stackOverflow: `1518802/jcc`,
          linkedIn: `in/jake-cox-958a3525/`,
          resumeInPdf: `/CV-22.pdf`, // url or local link
        },
        homePage: {
          availableToHire: true,
          dotColors: ["#0e3e1e", "#6CC551"],
          h1Text: `Hello! I'm Jake Cox`,
          h2Text: `I'm a Software Engineer who loves working in the Full Stack, I have worked as a software developer since 2011.`,
          typewriter: [
            `Coding is my passion 😎`,
            `I'm a fast learner and always interested in working with new technologies 🤓`,
            `I am ⚡ driven ⚡ to <strong>move fast<strong>, <strong>innovate<strong>, and <strong>collaborate<strong>`,
            `I like to share what I know 👨‍🏫 and mentor others`,
            `I love finding new places to get 🍕, 🍔, 🌮, 🍪, 🍻, ☕, 🍦`,
            `I also do design and UX work <span style='color: #27ae60;'>occasionally</span>`,
          ],
        },
        // Color for menu background
        shapeColor: {
          link: { color: "#171616", hover: "#fff" },
          shape1: {
            color: `#413f46`,
            opacity: `0.7`,
          },
          shape2: {
            color: `#e6e5ea`,
            opacity: `0.7`,
          },
          shape3: {
            color: `#fff`,
            opacity: `0.7`,
          },
        },
        footer: `heart`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jake Cox Portfolio`,
        short_name: `JCC`,
        description: `This spiffy website contains information about my work experience as a software engineer. Credit to @christiandavid for this amazing template.`,
        lang: `en-US`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        orientation: `portrait-primary`,
        categories: [`portfolio`, `experience`],
        shortcuts: [],
        related_applications: [],
        iarc_rating_id: `e84b072d-71b3-4d3e-86ae-31a8ce4e53b7`,
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`
        },
        theme_color_in_head: false
      },
    },
  ],
}
