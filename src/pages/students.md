---
layout: page
---

<script>
    import Banner from '../lib/Banner.svelte';
    import Section from '../lib/Section.svelte';
</script>

<Banner img="img/banner-students.jpg">

### Empowering students with career possibilities

An incredible opportunity is waiting for you.
Technology is changing the world by connecting billions of devices
and improving how we live, work, play and treat our planet.
Are you ready to change your life, and possibly make the world a better place?

</Banner>

<Section>

# Universities and Students

We have been working with universities, and students at Cisco Cognitive for many years. We have started at the university as COSE - Cognitive Security startup, before being acquired by Cisco in 2013. 
Character of our work requires continuous improvements. We have many engagements with universities in the country as well as with other research institutions. We have, but we also need people with a strong theoretical background, with AI and Machine learning skills, with data processing skills. Our large research team keeps working on new technologies to improve our threat detections. There are always interesting research topics to work on. But there are also interesting engineering tasks as well.

Every year we propose a list of topics for MSc and BSc thesis for students. The collaboration with students typically starts with student projects. When both parties find the collaboration interesting, the student typically continues as part time employee. Many of the former students are now also our colleagues. 

In general, if one wants to finish the theses with minimal effort, this is not right way to go. But if you want to work on an interesting and challenging task, learn practical skills, this is great start of your career.

List of the current topics with short description is available below. The problem specifications are typically not carved into the stone, but they are meant as starting point for a discussion. If the topic does not fit exactly your set of skills or you do not understand its details, do not worry. Get in touch and we will get you the right person to discuss the detail or find an alternative task which fits you better.

What is the best set of skills? It is almost sure that you will need to learn. It is typically helpful if you have a programming experience, it helps if you can process data. Any background from artificial intelligence, machine learning or data science is also helpful. But necessary is the enthusiasm and will to learn and learn quickly. 

For more information, please [contact us](#/contact).

</Section>

<Section gray={true}>

<a name="Indexofthesis"></a>

### Index of MSc and BSc thesis proposals

<br/>

- [Regexp generation from examples](#/students/Regexpgenerationfromexamples)
- [Assessment of the Coherency of the Asset Groups](#/students/AssessmentoftheCoherencyoftheAssetGroups)
- [Mining of Threat Behavioural Patterns](#/students/MiningofThreatBehaviouralPatterns)
- [Multiple Instance Learning (MIL) representations in cybersecurity](<#/students/MultipleInstanceLearning(MIL)representationsincybersecurity>)
- [Self-supervised learning in cybersecurity](#/students/Self-supervisedlearningincybersecurity)
- [Segmentation of Email body to zones](#/students/SegmentationofEmailbodytozones)
- [Using Machine Learning Techniques to Identify the Native Language of an English User](#/students/UsingMachineLearningTechniquestoIdentifytheNativeLanguageofanEnglishUser)
- [Detecting spear phishing from email content with NLP](#/students/DetectingspearphishingfromemailcontentwithNLP)
- [Learning parameters of detector ensemble from data with limited labels](#/students/Learningparametersofdetectorensemblefromdatawithlimitedlabels)
- [Contextual Passive DNS Resolution](#/students/ContextualPassiveDNSResolution)
- [Learning from multi-modal data using graph based approaches](#/students/Learningfrommulti-modaldatausinggraphbasedapproaches)
- [Dynamic properties of connection maps (knowledge database)](#/students/Dynamicpropertiesofconnectionmapsknowledgedatabase)
- [Global function (knowledge graph) composition impact on subsequent tasks](#/students/Globalfunctionknowledgegraphcompositionimpactonsubsequenttasks)
- [Network asset detection (and service description)](#/students/Networkassetdetectionandservicedescription)
- [Network Entity Representations for User/Device Tracking](#/students/NetworkEntityRepresentationsforUserDeviceTracking)
- [Dynamic Network Device Trajectories](#/students/DynamicNetworkDeviceTrajectories)
- [Bag properties in multi-instance learning](#/students/Bagpropertiesinmulti-instancelearning)
- [Threat detection on top of anomalous events](#/students/Threatdetectionontopofanomalousevents)
- [Classification of personal devices](#/students/Classificationofpersonaldevices)
- [Mining IOCs from the Internet](#/students/MiningIOCsfromtheInternet)
- [Hunting malicious domains in a graph of the Internet](#/students/HuntingmaliciousdomainsinagraphoftheInternet)

- [Chatbot for data annotation](#/students/Chatbotfordataannotation)
- [The API plugins for various product](#/students/TheAPIpluginsforvariousproduct)

<br/>

</Section>

<Section>

<a name="Softwareengineeringtopics"></a>

### Software engineering topics

<a name="Chatbotfordataannotation"></a>

##### Chatbot for data annotation

> Create a chatbot that would ease the labeling and evaluation of various types of data (Email, Network IOCs,
> Customer incidents in UI, ...). The idea is that such a bot would streamline the process of data labeling and thus
> increase the throughput. For some tasks that do not require expert knowledge, the bot would also allow for internal
> crowdsourcing of the annotations.

[_Index of thesis_](#/students/Indexofthesis)

<a name="TheAPIpluginsforvariousproduct"></a>

##### The API plugins for various product

> Security analytic - as a user - would like to have a one-click integration on Cisco's API. Create a plugin for
> 3rd party products (Splunk, QRadar..) which automatically integrates the Cisco product API to that products.
> Design and realized integration pattern to support useful security-analytic view on top of the API's data.
> Observe how customer adopts the plugins and evaluate the business goal.

[_Index of thesis_](#/students/Indexofthesis)

---

<a name="Researchtopics"></a>

### Research topics

<a name="Regexpgenerationfromexamples"></a>

##### Regexp generation from examples

> Regexp patterns are typically used to specify a pattern of URI indicating a particular threat type.
> Propose an algorithm of generating regexp based on examples and evaluate it with the existing data.

[_Index of thesis_](#/students/Indexofthesis)

<a name="AssessmentoftheCoherencyoftheAssetGroups"></a>

##### Assessment of the Coherency of the Asset Groups

> Cisco product enables the customers to assign hosts in their network to Asset Groups
> ([Cisco TrustSec](https://www.cisco.com/c/en/us/solutions/enterprise-networks/trustsec/index.html)).
> The Asset Groups are visible also in network traffic and influence the resulting risk presented to a customer.
> We would like to assess the coherency of the behaviors of the hosts assigned to the same Asset Group so that
> we could identify hosts, that are, for example, assigned to the wrong Asset group. Moreover, the exploration
> of the host behaviors from the Asset Groups' point of view will enable us to gain an initial insight into
> whether the Asset Group information can be further used for the development of other classifiers.
>
> **The student will:**
>
> - execute explanatory data analysis over SW telemetry with respect to Asset Groups
> - on a provided data from a selected customer, develop an approach to analyze the coherency of the host behavior's

    within a Asset Group

> Related Business-relevant goal: We will be able to device a warning for a customer, that a host might be included in
> the wrong Asset Group. We will gain first insight into Asset Group data and will be able to brainstorm for its usage
> for anomaly detection.

[_Index of thesis_](#/students/Indexofthesis)

<a name="MiningofThreatBehaviouralPatterns"></a>

##### Mining of Threat Behavioural Patterns

> _TBD_

[_Index of thesis_](#/students/Indexofthesis)

<a name="MultipleInstanceLearning(MIL)representationsincybersecurity"></a>

##### Multiple Instance Learning (MIL) representations in cybersecurity

> Representations and (possibly generative) models for multi-instance learning (MIL) problems and their applications
> in the security domain (context-based modeling of behavior, combining multiple IoCs together etc.). Likely based on
> probabilistic view on the problem, but not necessarily limited to.

[_Index of thesis_](#/students/Indexofthesis)

<a name="Self-supervisedlearningincybersecurity"></a>

##### Self-supervised learning in cybersecurity

> Self-supervised approaches have taken the conventional ML fields by storm. In cybersecurity, however, it is still
> not clear how to use such approaches due to many inconvenient characteristics of the data. Explore the
> state-of-the-art methods in self-supervised learning and aim to apply them to some subproblem in cybersecurity.

[_Index of thesis_](#/students/Indexofthesis)

<a name="SegmentationofEmailbodytozones"></a>

##### Segmentation of Email body to zones

> It is useful to segment emails to zones such as (header, body, signature, ...).
> Explore available tools such as [https://github.com/HPI-Information-Systems/QuaggaLib](https://github.com/HPI-Information-Systems/QuaggaLib)
> on our data and identify potential improvements.

[_Index of thesis_](#/students/Indexofthesis)

<a name="UsingMachineLearningTechniquestoIdentifytheNativeLanguageofanEnglishUser"></a>

##### Using Machine Learning Techniques to Identify the Native Language of an English User

> Email attackers are often non-native English speakers. Detecting whether an email is written by a non-native speaker
> could be a useful signal for phishing detection.

[_Index of thesis_](#/students/Indexofthesis)

<a name="DetectingspearphishingfromemailcontentwithNLP"></a>

##### Detecting spear phishing from email content with NLP

> Explore and suggest NLP-based methods that would be useful for detection of malicious emails.

[_Index of thesis_](#/students/Indexofthesis)

<a name="Learningparametersofdetectorensemblefromdatawithlimitedlabels"></a>

##### Learning parameters of detector ensemble from data with limited labels

> Machine learning system contains multiple specialized detectors that need to be aggregated to produce final verdict
> of the system. This aggregation is currently performed by more or less manual process because of unavailability of
> labeled data to train the ensemble using supervised learning. In this thesis, we would explore how to introduce
> automation into the training process and utilize vast amount of unlabeled data to better tune the ensemble.

[_Index of thesis_](#/students/Indexofthesis)

<a name="ContextualPassiveDNSResolution"></a>

##### Contextual Passive DNS Resolution

> Estimation of the most probable hostname that was requested via HTTP or HTTPS traffic on an observed IP address is
> a standard task in investigation of network traffic. A standard approach for estimation of such hostnames is based
> on a simple calculation of prior probabilities from the frequencies in Web proxy logs. Although usable, no other
> context information is utilized thus this prediction has a limited accuracy. However, these data often offer
> considerably broader set of features such as time-of-the-day, geographical information of the requester or history
> of a particular user, and this data may be used for more precise predictions. The task of the thesis is to propose,
> implement and evaluate predictive models for such passive DNS resolution models using at least three different
> approaches, having a naïve Bayes model as a baseline. The thesis should also propose proper evaluation metrics and
> measure contribution of the proposed solutions.

[_Index of thesis_](#/students/Indexofthesis)

<a name="Learningfrommulti-modaldatausinggraphbasedapproaches"></a>

##### Learning from multi-modal data using graph based approaches

> Learning and inference on graphs with nodes of different type (endpoints, servers, binaries, WhoIs entries, TOR nodes,
> certification authorities, Autonomous systems,...) would provide a swiss-knife tool for predictions from both static
> datasets (GFC) and different sources of telemetry (NetFlows, Web proxy logs, Email,...). The research might include
> exploring different types of encoding of the neighbor of the queried node in the graph, constructing new classifiers
> that will directly operate on graphs/subgraphs, considering the temporal/time-series factor of telemetries, annotation
> of nodes/edges with additional parameters or new sources of labels etc.

[_Index of thesis_](#/students/Indexofthesis)

<a name="Dynamicpropertiesofconnectionmapsknowledgedatabase"></a>

##### Dynamic properties of connection maps (knowledge database)

> Knowledge graphs (global models) usually capture static properties of the entities (e.g. web domains, users, binaries),
> where order of neighbours does not play any role. However, the source data (logs) serving for composition of these
> graphs contain information about order in temporary domain, for instance a sequence of domains that are visited by a
> particular user. The goal of the thesis is to identify a potential impact of this knowledge on the target task in
> cybersecurity domain (maliciousness classification) and to find/design a proper method gaining this advantage.
> A complexity issue of the chosen method should be also taken into account, since the database of the global knowledge
> is typically very large.

[_Index of thesis_](#/students/Indexofthesis)

<a name="Globalfunctionknowledgegraphcompositionimpactonsubsequenttasks"></a>

##### Global function (knowledge graph) composition impact on subsequent tasks

> Mining information from knowledge graphs stands for a common problem across many fields. The main focus of researchers is usually to tune methods for particular tasks using various (but given) knowledge graphs. However, the knowledge graph itself is typically assumed to be fixed, where couple of add-hoc composition steps are conducted to harness the graph composition ambiguity. The goal of the thesis is to analyse impact of individual graph composition steps on final tasks in cybersecurity domain (e.g. maliciousness classification, ranking), where the information from different sources of telemetry (NetFlows, WebFlows, NVM, Email,...) is reflected in the knowledge graph.

[_Index of thesis_](#/students/Indexofthesis)

<a name="Networkassetdetectionandservicedescription"></a>

##### Network asset detection (and service description)

> Network asset discovery using destination IPs, URLs, argv etc. The main focus of the research is to reliably detect assets on telemetry that does not necessarily contain all of the communication and describe all of the services that are running on the asset.

[_Index of thesis_](#/students/Indexofthesis)

<a name="NetworkEntityRepresentationsforUserDeviceTracking"></a>

##### Network Entity Representations for User/Device Tracking

> Creating vector representations from rich structured network data (such as NetFlow, endpoint logs, etc.) is first and
> crucial step of many machine learning models. The student will use different telemetry collected on a computer network
> to learn/create vector representations of different entities (computers, servers, IP addresses, URLs, etc.). The goal
> is to find such vector representations that capture the behavioral properties of the entities on the network.
> Possible initial step is to create of a connection graph between different entities. The nodes of this graph can then
> be represented by a graph algorithm such as [Node2Vec](https://snap.stanford.edu/node2vec/).

[_Index of thesis_](#/students/Indexofthesis)

<a name="DynamicNetworkDeviceTrajectories"></a>

##### Dynamic Network Device Trajectories

> Tracking of network device behavior in time is fundamental for behavioral anomaly detection. There are 2 important steps for such anomaly detection: finding the change in behavior and explaining what exactly has changed in the devices behavior. The student will use network logs (NetFlows, endpoint logs, proxy logs, etc.) to model and predict trajectories of the devices in the computer network. Any significant deviation should be detected and attributed to a specific set of events found in the network logs. The Jodie framework is a good starting point for this research.

[_Index of thesis_](#/students/Indexofthesis)

<a name="Bagpropertiesinmulti-instancelearning"></a>

##### Bag properties in multi-instance learning

> Multi-instance learning is a well-studied framework with applications in computer science as well as other fields. However, many statistical properties of bags are yet to be described and could open up new possibilities for learning on probability distributions. Also, valid data-augmentation techniques for multi-instance learning remain an open and not thoroughly-studied question with possible applications to unsupervised learning. The core of the thesis would be studying these properties and techniques and leveraging them to improve the performance of state-of-the-art multi-instance classifiers of network traffic

[_Index of thesis_](#/students/Indexofthesis)

<a name="Threatdetectionontopofanomalousevents"></a>

##### Threat detection on top of anomalous events

> Sophisticated malware is an evolving mechanism that adapts to its environment and detecting it promptly is difficult task. Therefore, we have created a set of events that depicts an anomalous activity in our telemetry. The combination of multiple weak signals of anomalous activities is a key to complex malware pattern identification and detection. The core of this topic is to research possible approaches for generalisation of behaviour patterns given previously seen events of compromised devices that can be used for threat detection in future.

[_Index of thesis_](#/students/Indexofthesis)

<a name="Classificationofpersonaldevices"></a>

##### Classification of personal devices

> Being able to distinguish devices tied to a human user from the rest of them is necessary preliminary step for variety of applications. The aim of this research is to develop a solution that is capable of providing such verdicts, using network telemetry and endpoint logs as its input.

[_Index of thesis_](#/students/Indexofthesis)

<a name="MiningIOCsfromtheInternet"></a>

##### Mining IOCs from the Internet

> There are many organisations publishing discovered Indicators of Compromise (IOCs) on the internet (e.g. malicious domains). However, these IOCs come in varying shapes (deny lists, blog posts, tweets) and in a different quality (often noisy, unstructured). Our threat intelligence platform would benefit from identifying the useful ones. This topic offers multiple tasks: from scraping particular sources, identifying useful IOCs to locating interesting Twitter accounts and many more.

[_Index of thesis_](#/students/Indexofthesis)

<a name="HuntingmaliciousdomainsinagraphoftheInternet"></a>

##### Hunting malicious domains in a graph of the Internet

> We can create a graph of the internet with nodes representing various entities (domains, IPs, files, etc.). We already know that some nodes are malicious. Propagation of this information in the graph can help us to find new malicious domains. We are particularly interested in utilisation of graph neural networks.

[_Index of thesis_](#/students/Indexofthesis)

</Section>
