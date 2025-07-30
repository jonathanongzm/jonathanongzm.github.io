---
layout: about
title: about
permalink: /
subtitle: 

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: <p>jonathanzong98[at]gmail[dot]com</p> <p>NTU Novena, Singapore</p>


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

Jonathan is a research assistant at the [Early Mental Potential and Well-Being (EMPOWER) Centre](https://www.ntu.edu.sg/empower) at Nanyang Technological University, Singapore. His research interests include how infants use social cues to represent agents and make sense of social interactions. He is also interested in how these early capacities support selective learning and scaffold their intuitive theories about the world.

He received his Bachelor of Psychological Science (Hons) from Monash University Malaysia in 2021, where he studied interpersonal perceptions in emerging adults. He then completed his M.A. in Psychology (Developmental Cognitive Neuroscience) at EMPOWER, where his thesis examined the neural basis of parent-to-child social transmission of information.

In his master’s research, he employed optogenetic techniques to synchronize or desynchronize medial prefrontal cortical activity in mouse dams and pups, causally demonstrating downstream effects on social behavior and learning. Using a dynamical systems approach, he showed that interbrain synchrony extends periods of social contingency and modulates explore-exploit trade-offs in foraging decisions.

Jonathan currently works closely with mothers and infants in studies of early cognitive and social development. He designs naturalistic tasks to evaluate executive function in young children at risk of neurodevelopmental disorders, and collects and processes dyadic EEG, ECG and multimodal behavioural data.

In parallel, he is part of an interdisciplinary team developing an end-to-end pipeline for the automated extraction of social interaction indices from naturalistic parent–infant play. The pipeline integrates multimodal behavioral and physiological data and will contribute to one of the largest curated datasets of its kind. The dataset will be used to train a model that can predict infant neurodevelopmental profiles from as early as 12 months of age, with applications in both clinical and commercial settings.

#### Simulated EEG Signals Over a 1-Second Window
<!-- EEG demo -->
<link rel="stylesheet" href="{{ '/assets/css/eeg-animation.css' | relative_url }}">

<canvas id="eegCanvas" width="800" height="200"></canvas>

<script src="{{ '/assets/js/eeg-animation.js' | relative_url }}"></script>
