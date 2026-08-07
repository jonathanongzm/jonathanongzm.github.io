---
layout: about
title: about
permalink: /
subtitle: 

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: <p>jonathan.ong[at]princeton.edu</p> <p>Princeton University</p>


selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

Jonathan is a PhD student at the [Princeton Baby Lab](https://babylab.princeton.edu/), advised by Professor Casey Lew-Williams. He is interested in how infants learn within their everyday environments and, more broadly, what early learning can reveal about human intelligence. To address these questions, he hopes to combine naturalistic and experimental approaches and use artificial intelligence as a testbed for understanding how cognition emerges from everyday experience.

Jonathan was born and raised in Malaysia, where he developed an interest in social interaction research as an undergraduate at Monash University Malaysia. He later completed an M.A. in Psychology at Nanyang Technological University in Singapore under the supervision of [Professor Victoria Leong](https://www.ntu.edu.sg/empower). 

During his master’s, he investigated the neural basis of parent-offspring social learning using a mouse model. He also worked with mothers and infants using multimodal measures of brain, body, and behavior, and contributed to the development of AI-assisted methods for characterizing parent-infant interactions and predicting early neurodevelopmental profiles.

#### Simulated EEG Signals Over a 1-Second Window
<!-- EEG demo -->
<link rel="stylesheet" href="{{ '/assets/css/eeg-animation.css' | relative_url }}">

<canvas id="eegCanvas" width="800" height="200"></canvas>

<script src="{{ '/assets/js/eeg-animation.js' | relative_url }}"></script>
