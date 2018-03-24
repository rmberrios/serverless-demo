'use strict';

const _ = require('lodash');
const router = require('express').Router();

const posts = [
  { title: 'Foo title', author: 'Foo author', content: 'Lorem ipsum dolor sit amet, nullam persecuti duo ei. Habemus dissentias ut usu, sit ut utamur explicari. No deseruisse philosophia has. Nonumy nostrud dolorum ut vix, harum tollit accumsan ius in, eum option interesset te. Feugiat delectus sententiae ad vis, at numquam delicata voluptatibus mea.' },
  { title: 'Bar title', author: 'Bar author', content: 'Lorem ipsum dolor sit amet, nullam persecuti duo ei. Habemus dissentias ut usu, sit ut utamur explicari. No deseruisse philosophia has. Nonumy nostrud dolorum ut vix, harum tollit accumsan ius in, eum option interesset te. Feugiat delectus sententiae ad vis, at numquam delicata voluptatibus mea.' },
  { title: 'Bar title', author: 'Bar author', content: 'Lorem ipsum dolor sit amet, nullam persecuti duo ei. Habemus dissentias ut usu, sit ut utamur explicari. No deseruisse philosophia has. Nonumy nostrud dolorum ut vix, harum tollit accumsan ius in, eum option interesset te. Feugiat delectus sententiae ad vis, at numquam delicata voluptatibus mea.' },

  { title: 'Foo title', author: 'Foo author', content: 'Lorem ipsum dolor sit amet, nullam persecuti duo ei. Habemus dissentias ut usu, sit ut utamur explicari. No deseruisse philosophia has. Nonumy nostrud dolorum ut vix, harum tollit accumsan ius in, eum option interesset te. Feugiat delectus sententiae ad vis, at numquam delicata voluptatibus mea.' },
  { title: 'Bar title', author: 'Bar author', content: 'Lorem ipsum dolor sit amet, nullam persecuti duo ei. Habemus dissentias ut usu, sit ut utamur explicari. No deseruisse philosophia has. Nonumy nostrud dolorum ut vix, harum tollit accumsan ius in, eum option interesset te. Feugiat delectus sententiae ad vis, at numquam delicata voluptatibus mea.' },
  { title: 'Bar title', author: 'Bar author', content: 'Lorem ipsum dolor sit amet, nullam persecuti duo ei. Habemus dissentias ut usu, sit ut utamur explicari. No deseruisse philosophia has. Nonumy nostrud dolorum ut vix, harum tollit accumsan ius in, eum option interesset te. Feugiat delectus sententiae ad vis, at numquam delicata voluptatibus mea.' },

  { title: 'Foo title', author: 'Foo author', content: 'Lorem ipsum dolor sit amet, nullam persecuti duo ei. Habemus dissentias ut usu, sit ut utamur explicari. No deseruisse philosophia has. Nonumy nostrud dolorum ut vix, harum tollit accumsan ius in, eum option interesset te. Feugiat delectus sententiae ad vis, at numquam delicata voluptatibus mea.' },
  { title: 'Bar title', author: 'Bar author', content: 'Lorem ipsum dolor sit amet, nullam persecuti duo ei. Habemus dissentias ut usu, sit ut utamur explicari. No deseruisse philosophia has. Nonumy nostrud dolorum ut vix, harum tollit accumsan ius in, eum option interesset te. Feugiat delectus sententiae ad vis, at numquam delicata voluptatibus mea.' },
  { title: 'Bar title', author: 'Bar author', content: 'Lorem ipsum dolor sit amet, nullam persecuti duo ei. Habemus dissentias ut usu, sit ut utamur explicari. No deseruisse philosophia has. Nonumy nostrud dolorum ut vix, harum tollit accumsan ius in, eum option interesset te. Feugiat delectus sententiae ad vis, at numquam delicata voluptatibus mea.' },
];

router.get('/', (req, res) => {
  res.render('index', { posts });
});

router.get('/posts', (req, res) => {
  res.json({ data: posts });
});


module.exports = router;
