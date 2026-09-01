---
title: Niagara College Golf
summary: Website created for Niagara College, where clients can sign up for golf tournaments organized by Niagara College as a fund raiser.
role: Software Developer
date: 2023-10-12
tags: [Azure DevOps, SQL Server, .Net, Blazor]
url: https://wcsvpw3web02.niagaracollege.ca/Forms/GolfClassic
featured: true
draft: false
---

Cleared technical debt within the company, as the original website was written in VB. I was tasked with recreating the website from scratch.

This project was the first one I was tasked with, when I joined [Niagara College](https://www.niagaracollege.ca/), as they had a webform which was written in VB, however, it was very old and support was being dropped by Microsoft. 
Thanks to that, I was able to practice my skills I learned in University. I created the database schema, and designed how every table connects to each other. Then using a Data layer, connected it back to the front end which was written in blazor (dot net). 

This was an amazing learning experience, as then I was able to learn from all the mistakes I made from making that design. 
Here are some of the lessons I learned. 
1. Ensure that, each section only knows about what it needs, and uses only objects it have. 
2. Define the responsibilities of each function, class, and layer, as if there is too much overlap, then code change can break everything. 
3. Use javascript sparsely, otherwise, the entire process will become more confusing. (That is ensure that, processing is only done server side)

Overall, I am still proud of this project, but I have hence improved from this.