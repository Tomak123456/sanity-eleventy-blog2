export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '628c7b8e81735b3c1bb4a9d2',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-2-studio-yuy39kkb',
                  apiId: 'e4b3fe1c-2b36-4032-a25b-8151cc70a1f0'
                },
                {
                  buildHookId: '628c7b8e54d7e53c16895c0e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-2-web-azxyweo7',
                  apiId: 'd7fa94fc-0abf-4525-8a55-4c2b759d7560'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Tomak123456/sanity-eleventy-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-2-web-azxyweo7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
