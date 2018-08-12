import React from 'react'

import {ChapterTen} from './Containers/Content/10.js';
import {ChapterTwenty} from './Containers/Content/20.js';
import {ChapterThirty} from './Containers/Content/30.js';
import {ChapterThirtyOne} from './Containers/Content/31.js';
import {ChapterThirtyTwo} from './Containers/Content/32.js';
import {ChapterThirtyThree} from './Containers/Content/33.js';

const topics = [
{
  name: 'Welcome',
  number: 1,
  id: 'about',
  next:"/topics/tech",
  buttonText:"Next Chapter",
  content: <ChapterTen topicNumber="1" topicTitle="Welcome" topicTitle="asd" topicText="juku"  nextChapter="/topics/about/general-information-regarding-this-page" next="/topics/tech" buttonText="Next Chapter" />,

  resources: [
    {
      name: 'General information regarding this page',
      id: 'general-information-regarding-this-page',
      subnumber: 1.1,
      content: <ChapterThirtyOne number="1.1" name="General information regarding this page" next="/topics/about/contributions-and-partners" buttonText="Next article" />

    },
    {
      name: 'Contributions and partners',
      id: 'contributions-and-partners',
      subnumber: 1.2,
      content: <ChapterThirtyTwo number="1.2" name="Dispurtion in magazine and tech business" next="/topics/tech"  buttonText="Next Chapter" />

    }
  ]
},
{
  name: 'Tech',
  number: 2,
  id: 'tech',
  next:"/topics/finance",
  buttonText:"Next Chapter",
  content: <ChapterTwenty topicNumber="2" topicTitle="Tech" topicText="Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem" nextChapter="/topics/tech/tech-in-promising-startups-withouth-massive-ico" next="/topics/finance" buttonText="Next article"/>,

  resources: [
    {
      name: 'Tech in promising startups withouth massive ICO',
      id: 'tech-in-promising-startups-withouth-massive-ico',
      subnumber: 2.1,
      content: <ChapterThirtyOne number="2.1" name="Tech in promising startups withouth massive ICO" next="/topics/tech/unicorn-and-7-eleven-sandwiches" buttonText="Next article" />

    },
    {
      name: 'Unicorn and 7-eleven sandwiches',
      id: 'unicorn-and-7-eleven-sandwiches',
      subnumber: 2.2,
      content: <ChapterThirtyTwo number="2.2" name="Unicorn and 7-eleven sandwiches" next="/topics/tech/dogs-in-developer-unique-startup-culture" buttonText="Next article" />

    },
    {
      name: 'Dogs in developer unique startup culture',
      id: 'dogs-in-developer-unique-startup-culture',
      subnumber: 2.3,
      content: <ChapterThirtyThree number="2.3" name="Dogs in developer unique startup culture" next="/topics/finance" buttonText="Next Chapter" />

    }
  ]
},
{
  name: 'Finance',
  number: 3,
  id: 'finance',
  next:"/topics/about",
  buttonText:"Next Chapter",
  content: <ChapterThirty topicNumber="3" topicTitle="Finance" topicText="Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatemm eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem" nextChapter="/topics/finance/future-of-dispruptive-blockchain-data-driven-redefining-unicorns" next="/topics/about" buttonText="Next article"/>,
  text: 'Declarative, component based routing for React',

  resources: [
    {
      name: 'Future of dispruptive blockchain data-driven redefining unicorns',
      id: 'future-of-dispruptive-blockchain-data-driven-redefining-unicorns',
      subnumber: 3.1,
      content: <ChapterThirtyOne number="3.1" name="Future of dispruptive blockchain data-driven redefining unicorns" next="/topics/finance/dispurtion-in-magazine-and-tech-business" buttonText="Next article" />

    },
    {
      name: 'Dispurtion in magazine and tech business',
      id: 'dispurtion-in-magazine-and-tech-business',
      subnumber: 3.2,
      content: <ChapterThirtyTwo number="3.2" name="Dispurtion in magazine and tech business" next="/topics/finance/cats-in-design-lead-startup-culture" buttonText="Next article" />

    },
    {
      name: 'Cats in design lead startup culture',
      id: 'cats-in-design-lead-startup-culture',
      subnumber: 3.3,
      content: <ChapterThirtyThree number="3.3" name="Cats in design lead startup culture" next="/topics/about" buttonText="Next Chapter" />

    }
  ]
},

]

export default topics
