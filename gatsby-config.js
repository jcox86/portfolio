module.exports = {
  plugins: [
    {
      resolve: `@christiandavid/gatsby-theme-byfolio`,
      options: {
        basePath: ``,
        path: `src/`,
        imagesPath: `src/images/`,
        iconFile: `src/images/icon.jpg`,
        siteTitle: `Portfolio`,
        siteUrl: `https://www.christianibarguen.com`,
        siteName: `Jake Cox`,
        siteShortName: `JCC`,
        siteDescription: `This nifty website contains information about my work experience as a software developer.`,
        siteKeywords: `Full Stack Developer, Software Engineer`,
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
          h1Text: `Hello!, I'm Jake Cox`,
          h2Text: `I'm a Software Engineer who loves working in the Full Stack, I have worked as a software developer since 2011.`,
          typewriter: [
            `Coding is my passion 😎`,
            `I live in Atascadero, CA with my wife and 4️⃣ crazy kids`,
            `I'm a 🍕, 🍔, 🌮, 🍪, and 🍻 lover`,
            `I'm a fast learner and always interested in learning new technologies 🤓`,
            `One of my values is the <strong>ability to resolve problems<strong>`,
            `I like to share what I know 👨‍🏫 and mentor others`,
            `In my non-coding hours, I'm at the 🏋‍`,
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
  ],
}
