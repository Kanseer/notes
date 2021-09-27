module.exports = [
  { text: 'Index', link: '/' },
  {
    text: 'Java', link: '/java/', items: [
      {
        text: 'JavaSE', items: [
          { text: 'Java基础', link: '/java/se/initial-java/' },
          { text: 'Java面向对象', link: '/java/se/object/' },
          { text: 'Java常用类', link: '/java/se/commonly-used-class/' },
          { text: 'Java集合框架', link: '/java/se/collection/synopsis/' },

        ]
      },
      {
        text: 'JavaSE进阶', items: [
          { text: 'JUC多线程', link: '/java/se/thread/1/' },

        ]
      },
      {
        text: 'JavaEE', items: [

          { text: 'JavaWeb', link: '/javaweb/' },
        ]
      },

    ]
  },
  {
    text: 'Sql',
    items: [

      {
        text: 'SQL 数据库', items: [
          { text: 'MySQL', link: '/mysql/' },

        ]
      },

      {
        text: 'NoSQL 数据库', items: [
          { text: 'Redis', link: '/redis/' },
          { text: 'ElasticSearch', link: '/es/' },
          { text: 'MongoDB', link: '/mongodb/' },
        ]
      },
    ]
  },
  {
    text: 'Farmwork',
    items: [
      {
        text: '数据库', items: [
          { text: 'MyBatis', link: '/mybatis/study-note/' },
          { text: 'MyBatis-Plus', link: '/mybatis-plus/study-note/' },
        ]


      }, {
        text: 'Spring', items: [
          { text: 'Spring', link: '/spring/' },
        ]
      }
      , {
        text: '中间件', items: [
          { text: 'RabbitMQ', link: '/rabbitmq/' },
        ]
      }
    ]
  },
  {
    text: 'Tools',
    items: [
      { text: 'Git', link: '/git/' },
      { text: 'Docker', link: '/docker/' },
      { text: 'Jenkins', link: '/jenkins/' },
    ]
  },
  {
    text: 'Other',
    items: [
      { text: 'C语言', link: '/c/' },
      { text: 'SMC&P', link: '/SMC&P/note/' },
    ]
  },
  { text: 'About', link: '/about/' },
  { text: 'Archives', link: '/archives/' }
]