---
layout: page
---

<script>
    import Cards from '../lib/Cards.svelte';
    import Card from '../lib/Card.svelte';
    import CardButton from '../lib/CardButton.svelte';
    import Section from '../lib/Section.svelte';
    import Banner from '../lib/Banner.svelte';
    import GtaLogin from '../lib/GtaLogin.svelte';
</script>

<GtaLogin>

Cisco Global Threat Alerts

[Login](https://cognitive.cisco.com/CWSP/ctaLogin)

</GtaLogin>

<Banner img="img/banner-about.jpg">

### About us

Cisco Cognitive Intelligence is a part of Cisco Secure, the largest enterprise cybersecurity company in the world. We are developing complex systems for cyber threat detection using machine learning and artificial intelligence.

<div>
    <CardButton filled={true} href="#/about">Prague Team</CardButton>
</div>

</Banner>


<Cards>

<Card img="img/card-0.jpg" href="#/news">

### News

There is always something new happening at Cisco Cognitive Intelligence.
Check here for recent updates. 

#### Updated September 12, 2022

<CardButton>What's new</CardButton>


</Card>


<Card img="img/card-2.jpg" href="#/jobs">

### Work opportunities

Cisconians work hard — and we reward hard.
We go beyond the usual benefits, with surprising extras we think you'll love.

<CardButton>Open positions</CardButton>

</Card>

<Card img="img/card-3.jpg" href="#/students">

### Students 

Put your skills to the test and create technology and experiences that shape how the future works.

<CardButton>View offers</CardButton>

</Card>


<Card img="img/card-6.jpg" href="https://blogs.cisco.com/tag/cognitive-intelligence">

### Blog

Look at what the Cognitive Intelligence team is blogging about.


<CardButton>Get inside</CardButton>

</Card>


<Card img="img/card-5.jpg" href="#/publications">

### Selected publications

If you're interested in a deep-dive of what we're doing, have a look at some of the papers.

<CardButton>Selected papers</CardButton>

</Card>

<Card img="img/card-4.jpg" href="#/contact">

### Contact us

In the center of one of Europe’s most beautiful cities, with a splendid view
of the ancient Prague castle, sits our Cisco Office in Prague, just steps away from the Vltava River.

<CardButton>Get in touch</CardButton>

</Card>

</Cards>
