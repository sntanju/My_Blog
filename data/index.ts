export const navbarData = {
  homeTitle: "Sanjida's Blog",
}

export const footerData = {
  author: 'Sanjida Nasrin',
  aboutAuthor:
    'Hi! I am Sanjida, a Tech enthusiast, problem solver and software developer.',
  authorInterest:
    "I have a fair amount of knowledge of Javascript, Typescript, React, PHP and Laravel. If you have an interesting idea, either open source or paid let's connect.",
  aboutTheSite:
    "This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it's deployed in Vercel.",
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description:
    'Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Sanjida Nasrin',
  description: 'Software Developer, Problem Solver, Web Enthusiast.',
  aboutMe:
    "I'm a passionate software developer who loves writing code and constantly learning new things. Though currently unemployed, I'm actively honing my skills and crafting projects to sharpen my expertise. Problem-solving is my superpower, and I'm always up for tackling challenges head-on!",
}

export const seoData = {
  title: `Sanjida's Blog | Sanjidas Blog`,
  ogTitle: `Let's learn Javascript, Typescript, React, PHP, Laravel, & Problem Solving - Sanjidas Blog | Sanjida's Blog`,
  description: `Hi I am Sanjida. A Software Engineer at AppsCode, with over 2.5+ years experience in software development. - Sanjidas Blog | Sanjida's Blog`,
  twitterDescription: `Sanjida's Blog, where I play around with React, PHP, Larevel, and more and showcase my blog, resources, etc - Sanjidas Blog | Sanjida's Blog`,
  image:
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog-nurriyad.vercel.app',
  twitterHandle: '@sntanju07',
  mailAddress: 'sntanju07@gmail.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
