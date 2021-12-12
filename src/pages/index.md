---
layout: page
---

<script>
    import Cards from '../lib/Cards.svelte';
    import Card from '../lib/Card.svelte';
    import CardButton from '../lib/CardButton.svelte';
    import Section from '../lib/Section.svelte';
    import Banner from '../lib/Banner.svelte';
</script>


<Banner img="img/banner-about.jpg">

### About us

Cisco Cognitive Intelligence is part of Cisco Secure, the largest enterprise cybersecurity company in the world. We are developing complex systems for cyber threats detection using Machine learning and Artificial intelligence.

<div>
    <CardButton filled={true} href="#/about">Prague Team</CardButton>
</div>

[Login](https://cognitive.cisco.com/CWSP/ctaLogin?error=invalidSession&originalUrl=%2Fui) to Global Threat Alerts.

</Banner>


<Cards>

<Card img="img/card-2.jpg" href="#/jobs">

### Put your talent to work

Cisconians work hard — and we reward hard.
We go beyond the usual benefits with surprising extras we think you'll love.

<CardButton>Open positions</CardButton>

</Card>

<Card img="img/card-3.jpg" href="#/students">

### Students 

Put your skills to the test to create technology and experiences
that’s shaping how the future works.

<CardButton>View offers</CardButton>

</Card>

<Card img="img/card-5.jpg" href="#/publications">

### Selected publications

If you are interested to deep dive to what we are doing, have a look at some of the papers.

<CardButton>Selected papers</CardButton>

</Card>

<Card img="img/card-4.jpg" href="#/contact">

### Contact us

In the center of one of Europe’s most beautiful cities, with a splendid view
of the ancient Prague castle, just steps away from the Vltava River – sits our
Cisco Office in Prague.

<CardButton>Get in touch</CardButton>

</Card>

</Cards>
