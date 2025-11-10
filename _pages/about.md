---
layout: about
title: about
permalink: /
subtitle: 

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: <p>jonathan.ongzm[at]ntu[dot]edu[dot]sg</p> <p>NTU Novena, Singapore</p>


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

Jonathan is a research assistant at the [Early Mental Potential and Well-Being (EMPOWER) Centre](https://www.ntu.edu.sg/empower) at Nanyang Technological University, Singapore. He is broadly interested in how and what infants learn from social interactions.

He received his Bachelor of Psychological Science (Hons) from Monash University Malaysia in 2021, where he studied interpersonal perceptions in emerging adults. He then completed his M.A. in Psychology (Developmental Cognitive Neuroscience) at EMPOWER, where his thesis examined the neural basis of parent-to-child social transmission of information.

In his master’s research, he employed optogenetic techniques to synchronize or desynchronize medial prefrontal cortical activity in mouse dams and pups, causally demonstrating downstream effects on social behavior and learning. Using a dynamical systems approach, he showed that interbrain synchrony extends periods of social contingency and modulates explore-exploit trade-offs in foraging decisions.

Jonathan currently works closely with mothers and infants to study how early cognitive and social abilities develop. His research uses naturalistic play-based tasks to assess executive function in young children at risk for neurodevelopmental disorders, while capturing dyadic EEG, ECG, and behavioral measures to characterize patterns within parent–child interactions.

In parallel, he is part of an interdisciplinary team developing an end-to-end pipeline for the automated extraction of social interaction indices from naturalistic parent–infant play. The pipeline integrates multimodal behavioral and physiological data and will contribute to one of the largest curated datasets of its kind. The dataset will be used to train models that predict infant neurodevelopmental profiles from as early as 12 months of age, with applications in both clinical and commercial settings.

#### Simulated EEG Signals Over a 1-Second Window
<!-- EEG demo -->
<link rel="stylesheet" href="{{ '/assets/css/eeg-animation.css' | relative_url }}">

<canvas id="eegCanvas" width="800" height="200"></canvas>

<script src="{{ '/assets/js/eeg-animation.js' | relative_url }}"></script>
