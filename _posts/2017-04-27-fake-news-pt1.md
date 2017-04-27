---
layout: post
title: I Solve Google And Facebook's Fake News Problem
---
##### This article first appeared on [Tech In Asia](https://www.techinasia.com/talk/google-facebook-fake-news-recommendation) on 4th April 2017.

<img src="/images/angry-2191104_640.jpg" alt="angry">

# I Solve Google and Facebook's Fake News Problem
The fight against fake news is an enormous no-win situation. Almost everybody loses. Only the handful of fake news peddlers stand to gain. For the price of a few ad dollars, they have almost certainly impoverished the media landscape for the rest of us.

## Where We Stand
The companies with the most to lose from fake news are Facebook, and Google. Already, Google has implemented a policy against [misrepresentation by websites](https://techcrunch.com/2017/03/18/google-offers-more-control-after-ad-on-offensive-content-leads-to-brand-boycott/). *"This means the sites built by Macedonian teenagers to capitalise on crazy stories associated with Trump, employing Adx adverts, would be in violation, because they were concealing who they really were."* However stories about "Pizzagate" (a controversy surrounding Hillary Clinton's campaign) on legitimate news sites, which would not be in violation even though the story was entirely fictitious. This is a consequence of Google's policy of targeting misrepresentation by the news organization, which takes place at the organizational level.

Facebook has struggled mightily with fake news. They have tried numerous measures ranging from PR to product, well-captured in [this article by Jordan Crook](https://techcrunch.com/2017/03/19/facebook-will-never-take-responsibility-for-fake-news/). None have been the silver bullet needed. The philosophy informing Facebook's current work on fake news is the belief that [surfacing a plurality of viewpoints](http://www.recode.net/2017/2/16/14632726/mark-zuckerberg-facebook-manifesto-fake-news-terrorism) will overcome the problem.

The difference between Facebook and Google's approach is illuminated by the difference in behaviour on their respective platforms. Google users actively have to search for information, while Facebook users are passive consumers of information that is pushed to them by a predictive algorithm. Google's job is easier. Their search results do not actively deny information to users. If someone wants to read about the moon-landing hoax, they can. 

Facebook has an enormous problem because as former Facebook product designer Bobby Goodlatte said: 

> "[Sadly, News Feed optimizes for engagement. As we’ve learned ... bullshit is highly engaging](https://www.facebook.com/g/posts/10101648538367704)". 

The closest that Google gets to Facebook's problem is with Google News. Facebook and Google News both thrive on user engagement. For both services to effect lasting change against fake news, they would have to act against their own interests in the short-term in the interest of finding a long-term solution.

Unfortunately for us, Google (through Google News Labs) and Facebook (through CrowdTangle) are doing the digital equivalent of a fluffy [CSR](https://en.wikipedia.org/wiki/Corporate_social_responsibility) project with the [CrossCheck](https://blog.google/topics/google-europe/crosscheck-first-draft-newsrooms-french-elections/) project. Through CrossCheck, anyone can submit a story for investigation by the professional news organizations who are part of the project. Results of these investigations will be released on the CrossCheck website, where presumably they will be read by all 4 objective-minded people in the world. The CrossCheck project is clearly not a long-term solution.



## Dropping The Hammer On Fake News
The truth is, fact-checking will not keep up with the volume of fake news. To compound the problem, a lot of material will also be ambiguous. Facebook and Google cannot vet all content before allowing them entry into their ecosystem. To solve 80% of the problem, I predict that they will eventually move to adopt a 3-pronged strategy towards fake news. 

The first strategy is to have a whitelist of trusted news sources and a blacklist of known fake news peddlers. Whitelisted sites will see their content published instantly while blacklisted sites will never appear on FB and Google. This is easy.

The second strategy is to create a filter for sites of unknown trustworthiness. This filter does not have to be perfect. It only needs to be good enough, like [this one](http://www.fakenewsai.com/). A programmed filter can evaluate a website based on the following criteria:

1. Is the article written with sober, journalistic understatement
2. Is the article guilty of hyperbolic language
3. Is the article well-sourced
4. Is the quality of the sources referenced high
5. Is the domain owner a company or person
6. Is the age of domain over 1 year
7. Is the age of legal entity behind website over 5 years
8. Is the domain a recipient of much Google search traffic over the past year

Websites that tick a number of the boxes above would be considered trustworthy and eligible to appear on Facebook's News Feed and Google News. A more forgiving version of this filter can block websites that don't satisfy any of the criteria above. More fake news may get through in the second configuration, but the most egregious offenders will be filtered out of your News Feed. 

Third is to give journalists the power of moderation, similar in principle to what happens on most forums. The similarity will become clearer as we dive in. What this means in practice is to trust content shared by journalists on Facebook / Twitter, or mentioned on the journalists' column or blog. Content shared by the journalists will be deemed safe and allowed to be more visible or appear more quickly on Google and social media. This part is easy. Social profiles, blogs and columns of journalists are already crawled by Google anyway. The only extra work is to add the linked websites to a whitelist. Journalists will also be allowed to flag fake news. In practical terms this could mean emailing a link of the content to an email address. Content flagged this way will be ineligibe to appear anywhere.

Some content may be both endorsed and flagged as fake news by different journalists. In such a situation, it is better to be forgiving. Such a rule leans towards free speech, and also boosts user engagement. It is also easier to reverse if needed. If a single flag would ban a piece of content, a lot more content would be blocked, and any appeal would definitely come too late for the reinstated content to ride on any viral effects that it originally possessed. However, permitted content that later turns out to be false can be removed. This is the most rational content policy.

A reliance on journalists and news outlets in general is also good because they are some of the heaviest consumers of media around. A good moderator has to be savvy to everything going on in their domain, and journalists are perfect for this dual role.



## The Biggest Losers
The plan above is not perfect, far from it. Potentially the most pernicious effect of such a policy is that a breaking news story from a mid-sized newspaper that no one has heard of could easily get filtered out of the FB news feed. We may have to wait for the narrative to be shaped by a major news outlet which would rewrite the story. This prevents full credit from going where it is due, and also gives the major news outlet more reward than deserved for regurgitating a story broken elsewhere. Smaller news sites will find it harder to make a mark. 

In addition to the uphill struggle, smaller sites could in effect be held to a higher standard of integrity and quality than the major outlets. This is true for people and media regardless of their political persuasions. Larger sites on a whitelist will always reap the benefits of social media, while a higher barrier to entry keeps smaller sites small.

Perceptive readers may have noticed that the whitelist I foresee has no mechanism for demoting websites that started on the list but became less trustworthy over time. In truth there is no practical way to demote a major media outlet from the whitelist. Companies like Facebook and the WSJ are symbiotically linked. Their journalists are also members of the anti-fake-news team. Could enforcement possibly take place? Maybe, but don't hold your breath.

There is precedent for this problem at least with Google. SEOs are very familiar with [the resilience of big brands](https://searchenginewatch.com/sew/how-to/2300841/big-brands-google-penalties-you) on Google. You wouldn't expect a big brand to disappear from Google simply because users can and will continue to search for it on Google. Google may from time-to-time issue warnings to big brands about their SEO practices, and may even penalise the company, but no large company has ever disappeared from Google entirely.


Small websites and niche blogs are likely to be the hardest hit once the inevitable tightening of Facebook and Google begins. The time when big media companies were collapsing around us as upstart internet news sites stole their lunch with free content is now officially over. The empire has struck back.

## can we tell what is fake news?
in practical terms, that is impossible. We simply are not equipped to judge the truth of news stories. we also have insufficient time to devote to this, and confirmation bias acting against us. 

## what can i do to avoid fake news?
get off the internet. You cannot avoid fake news. 

## are we stuck with it forever?
no. the rise of fake news is a reaction to a trust deficit in the media, and reflects a shift in consumer attitudes.


Initially it reminded me of black hat SEO. Once upon a time, there was Wordpress comment spam. If you ever read simple and simplistic blog comments that appeared totally out of context talking about handbags or pills, there was a black hat marketer behind it. Today's fake news websites are the black hats of media. They get user attention and thus advertiser dollars, while feeding our gremlins of confirmation bias and moral outrage. However, the scope of the fake news problem makes comment spam look simple as a paperclip.

Fake news' real consequences are surprisingly old hat. Former Queen of France Marie Antoinette was the victim of vicious rumours alleging sexual depravity and apathy to the lives of her poor citizens. Slightly more recently, Chinese authorities have been combating online rumours since at least 2013. Reuters reported that rumours seen over 5,000 times or shared by over 500 people [can result in a jail term](http://www.reuters.com/article/us-china-internet-idUSBRE9880CQ20130909) of 3 years.