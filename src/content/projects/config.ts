export const projects: ProjectType[] = [
  {
  "id": "1",
  "title": "Analysis of ecommerce coupon sales using SAS Viya",
  "slug": "ecommerce-coupon-purchase-analysis",
  "shortDescription": "Analyzed an e-commerce coupon site dataset using SAS VIYA tools to understand customer demographics and spending habits, and built a predictive model for coupon purchases.",
  "image": "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg",
  "photo_credit": "Photo by Aleksandar Pasaric from Pexels: https://www.pexels.com/photo/people-walking-on-the-street-2506923/", 
  "tags": ["Data Analysis", "SAS VIYA", "Data Visualization", "Machine Learning", "Gradient Boosting"],
  "externalLinks": [
    { "url": "https://www.canva.com/design/DAGFU9OLjMg/QNT-C4ZXk77vYVJgEr7nWQ/view?utm_content=DAGFU9OLjMg&utm_campaign=designshare&utm_medium=link&utm_source=viewer", "label": "Full Project Slides", "description": "Complete project slides presented during the SAS AIML Program." }
  ],
  "technologies": ["SAS VIYA", "SAS Data Studio", "SAS Model Studio", "Data Visualization", "Gradient Boosting"],
  "date": "2022-09-30",
  "blocks": [
    {
      "type": "text",
      "content": "## Overview\n\nIn this project, my team and I were tasked with extracting insights from an e-commerce coupon site dataset using SAS VIYA tools such as SAS Data Studio and SAS Model Studio."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project Background1.png",
      "caption": "Business background of the Ponpare coupon site.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Business Understanding\n\nPonpare is a coupon site selling discount coupons for various products in Japan. Users purchase coupons, which can be exchanged for goods and services at discounted prices. The goal was to understand customer demographics and spending habits to create a recommendation system promoting the right coupons to potential buyers."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project Background2.png",
      "caption": "Data sources used for the project.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Data Understanding\n\nThe dataset contained user visit details, coupon user demographics, and coupon features. This dataset was obtained from Kaggle."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project Data Ext1.png",
      "caption": "Initial data cleaning and preparation.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Data Preparation\n\nData preparation involved translating Japanese characters with Google Translate to create lookup tables. SAS Data Studio was used for visual data transformations, and custom SAS code handled more complex steps. This ensured the dataset was suitable for visualization and modeling."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project Data Ext2.png",
      "caption": "Further data preparation using SAS Data Studio.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Data Visualization\n\nThe visualization reveals several key insights about user behavior. Most users are based in Tokyo, highlighting the city as the platform’s primary market. Users aged 36–50 stand out as the most active buyers, purchasing more coupons compared to other age groups. On average, female users also purchased more coupons than male users, indicating a stronger engagement among women. In contrast, very few users fall into the 15–21 age group, making up only 0.3% of the user base, which points to limited adoption among younger individuals."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project Data Exp.png",
      "caption": "Exploratory data visualization showing key insights about user demographics.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project Data Exp2.png",
      "caption": "Coupon purchase patterns by genre and gender.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "Purchase habits vary by genre: males buy more food coupons, females buy more delivery service coupons. Despite higher volume for food and delivery, hotel coupons generated the most revenue."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project Data Exp3.png",
      "caption": "Effect of coupon viewing order on purchase likelihood.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "The order in which coupons were viewed affected purchase likelihood. Viewing 6 or more coupons significantly reduced the chance of purchase, shown by narrowing paths in the visualization."
    },
    {
      "type": "text",
      "content": "## Modeling\n\nA binary classification model was developed using SAS Model Studio to predict whether a customer is likely to purchase a coupon. Gradient Boosting was selected as the champion model, as it demonstrated higher accuracy and precision compared to other candidates. The most influential features identified by the model included viewing order, discount, genre, discount start month, and validity period."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project ML1.jpg",
      "caption": "Modeling approach using binary classification.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project ML2.jpg",
      "caption": "Data prepared for modeling in SAS Data Studio.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project ML prep.jpg",
      "caption": "Features considered for the predictive model.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project ML prep2.jpg",
      "caption": "Further preprocessing, including missing value imputation and scaling.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project Model Eval.jpg",
      "caption": "Model evaluation to select the best performing model.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project Model Insights.jpg",
      "caption": "Top 5 important features influencing purchase likelihood.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj1_sas/SAS Project Application.jpg",
      "caption": "Potential applications of the predictive model.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Potential Applications and Deployment\n\nThe model could power a recommendation system to suggest coupons to likely buyers. Additionally, sellers could pay to prioritize their coupons in viewing order, as early placement significantly increases purchase likelihood."
    },
    {
      "type": "text",
      "content": "The full version of this project was presented during the SAS AIML Program Final Project.."
    }
  ]
  },
  {
  "id": "2",
  "title": "Visualising Singaporean Attitudes towards the US and China",
  "slug": "singaporean-attitudes-us-china",
  "shortDescription": "Analyzed data from the Global Attitudes Spring 2022 survey to explore Singaporeans' opinions on the US and China using R and ggplot.",
  "image": "https://images.pexels.com/photos/4386371/pexels-photo-4386371.jpeg",
  "photo_credit": "Photo by Photo By: Kaboompics.com from Pexels: https://www.pexels.com/photo/american-and-chinese-flags-and-usa-dollars-4386371/", 
  "tags": ["Data Visualization", "R", "ggplot2", "Survey Analysis", "Demographics"],
  "externalLinks": [
    { "url": "https://github.com/yourusername/pew-survey-analysis", "label": "View R Code", "description": "Source code used for data preparation and visualization." }
  ],
  "technologies": ["R", "ggplot2", "dplyr", "tidyr", "foreign"],
  "date": "2023-08-31",
  "blocks": [
    {
      "type": "text",
      "content": "## Overview\n\nThis project analyses data from the Global Attitudes Spring 2022 survey conducted by Pew Research Center, focussing on Singaporean opinions about the US and China using R and ggplot. The objective was to present the insights through data visualisation."
    },
    {
      "type": "text",
      "content": "## Data Preparation\n\nTo analyse the attitudes of Singaporeans towards both the US and China, data from the Global Attitudes Spring 2022 survey conducted by Pew Research Center was loaded into R using the `foreign` package. The data was filtered to only include responses from Singaporeans. By consulting the questionnaire documentation, the columns `fav_us` and `fav_china` were found to be the main subjects of this analysis. Additionally, demographic information such as age, gender, education level, ethnicity, and income level of respondents were retrieved and saved into a new dataframe."
    },
    {
      "type": "text",
      "content": "To prepare the data for plotting, the survey question columns were pivoted into a single column while demographic columns were left unchanged. This ensured responses for similar questions could be plotted together. The dataframe was filtered to contain only survey questions about respondents' favourability towards the US and China. Age was converted from factor to numeric to prevent unusual values, while other categorical variables remained as factors."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj2_survey/Visualisation Project data.png",
      "caption": "Sample of pivoted survey data.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj2_survey/Visualisation Project data2.png",
      "caption": "Additional sample of prepared survey data.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "The `plot_data` dataframe was created to remove invalid responses marked as “DO NOT READ”. Recategorisation of variables was also performed for education level. This prepared dataset was then ready for plotting to determine Singaporeans' opinions towards the US and China."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj2_survey/Visualisation Project chart1.png",
      "caption": "Favourability of Singaporeans towards the US and China.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Key Insights\n\nIn the survey of 1001 Singaporeans, a higher percentage indicated a favourable view of China compared to the US. Over 11% had a very favourable opinion of China, and 53% somewhat favourable, while opinions towards the US were lower at 7% very favourable and 47% somewhat favourable. More than 10% had a very unfavourable view of the US compared to less than 10% for China. The majority view both countries somewhat favourably, but some Singaporeans are viewing the US less favourably than China."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj2_survey/Visualisation Project chart2.png",
      "caption": "Demographic analysis of respondents' opinions.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "Demographic analysis shows that respondents in their thirties and fifties were more likely to have a very favourable view of China. Younger respondents tended to give milder responses of somewhat favourable or somewhat unfavourable. Men were more likely than women to express strong opinions at both extremes. In terms of ethnicity, almost 60% of ethnically Chinese respondents were somewhat favourable towards China, with similar trends for the US. Non-Chinese respondents showed higher proportions of very unfavourable views towards China but very favourable views towards the US."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj2_survey/Visualisation Project chart3.png",
      "caption": "Age-wise distribution of survey responses.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj2_survey/Visualisation Project chart4.png",
      "caption": "Gender differences in opinion distribution.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj2_survey/Visualisation Project chart5.png",
      "caption": "Education level vs. favourability towards the US and China.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "Education level impacted opinions as well. Over 30% of those very favourable towards China had primary school education or below, which was similar for very unfavourable opinions towards the US. Highly educated respondents mostly viewed both countries somewhat favourably, with doctorate holders viewing China slightly more favourably than the US."
    },
    {
      "type": "text",
      "content": "## Conclusion\n\nThe majority of Singaporeans still hold a somewhat favourable view of both the US and China. Minorities, mostly men in their fifties with lower education levels, show very favourable views of China and very unfavourable views towards the US. Understanding these patterns can provide insight into public perception and its implications for regional stability."
    },
    {
      "type": "text",
      "content": "The full version of this project was submitted as part of an assessment during the course ANL501: Data Visualisation and Storytelling."
    }
  ]
  },
  {
  "id": "3",
  "title": "Difference-in-Differences Analysis of Dairy Product Discounts",
  "slug": "difference-in-differences-dairy-discount",
  "shortDescription": "Evaluated the impact of a 10% discount on dairy product sales at 200 supermarkets using a Difference-in-Differences approach with fixed and random effects models.",
  "image": "https://images.pexels.com/photos/20489330/pexels-photo-20489330.jpeg",
  "photo_credit": "Photo by fajri nugroho from Pexels: https://www.pexels.com/photo/dairy-section-in-a-grocery-store-20489330/",
  "tags": ["Difference-in-Differences", "Causal Analysis", "Econometrics", "Fixed Effects", "Random Effects"],
  "externalLinks": [],
  "technologies": ["R", "Python", "Econometrics", "DID Analysis", "Fixed Effects", "Random Effects"],
  "date": "2023-11-15",
  "blocks": [
    {
      "type": "text",
      "content": "## Overview\n\nThis project utilizes a Difference-in-Differences (DID) approach to evaluate the impact of a 10% discount on dairy product sales at 200 supermarkets over a 15-day period. The analysis distinguishes between supermarkets receiving the discount (storeids 1-50) and those not receiving it (storeids 51-200). Results suggest the discount significantly increases sales, with parallel trends supporting the DID methodology."
    },
    {
      "type": "text",
      "content": "## Introduction\n\nTo investigate the effect of a 10% discount on dairy product sales, a DID model was utilized. This leverages the parallel trends assumption, covering a pre-treatment period (days 1–7) and post-treatment period (days 8–15)."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj3_did/DID chart.jpg",
      "caption": "Visualization of the DID model setup.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Model Specification\n\nTwo-Period DID Model:\n\nY = β0 + β1Time + β2Treat + β3(Time×Treat)\n\n- β1: Time effect on sales for control group\n- β2: Pre-treatment differences between groups\n- β3: Treatment effect (impact of discount)\n\nMulti-Period DID Model:\n\nY = β0 + β1Time2 + β2Treat + β3(Time2×Treat) + β4Time3 + β5(Time3×Treat) + …\n\nThis includes interaction terms for each time period to capture variations in treatment effect.\n\nFixed Effects Model:\n\nY = β0 + β1Time2 + β2Treat + β3(Time2×Treat) + … + βn(Timex×Treat) + U + pop\n\nRandom Effects Model:\n\nY = β0 + β1Time2 + β2Treat + β3(Time2×Treat) + … + βn(Timex×Treat) + pop + U\n\nWhere U represents entity-specific effects and pop is the population around each supermarket."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj3_did/Fixed effects model.jpg",
      "caption": "Fixed Effects model results.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj3_did/Fixed effects model2.jpg",
      "caption": "Additional Fixed Effects model results highlighting interaction terms.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Results\n\nFixed Effects Model:\n- Pre-treatment period: Interaction terms between treatment and days 2–7 were not significant, supporting parallel trends.\n- Post-treatment period: Significant interaction effect on day 9 (p < 0.05), with coefficient 51.6, indicating the discount increased sales by 51.6 units.\n\nRandom Effects Model:\n- Produced similar results to fixed effects.\n- Population variable was not significant.\n\nHausman Test:\n- Random effects model is an acceptable simplification (p > 0.05)."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj3_did/Hausman test.jpg",
      "caption": "Hausman test comparing fixed and random effects models.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Conclusion\n\nThe DID analysis demonstrates that the 10% discount significantly increased dairy product sales, particularly from day 9 onwards. The parallel trends assumption was validated. Both fixed and random effects models are appropriate, with the random effects model being a simpler alternative. The population variable did not significantly affect sales."
    },
    {
      "type": "text",
      "content": "The full version of this project was submitted as part of an assessment during the course ANL553: Applied Statistical Methods and Causal Analysis."
    }
  ]
  },
  {
  "id": "4",
  "title": "Automating Doctor Survey Data Consolidation using Python and MySQL",
  "slug": "doctor-survey-data-automation-python-mysql",
  "shortDescription": "Automated extraction and consolidation of doctor survey data from multiple Excel spreadsheets into a structured MySQL database using Python and SQL.",
  "image": "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
  "photo_credit": "Photo by Pixabay from Pexels: https://www.pexels.com/photo/close-up-photo-of-a-stethoscope-40568/",
  "tags": ["Python", "MySQL", "Data Automation", "ETL", "Data Cleaning"],
  "externalLinks": [
    {
      "url": "https://waijie-portfolio.streamlit.app/data-consolidation-transformation-with-python",
      "label": "View Python Code",
      "description": "Code demonstrating the automation of Excel to MySQL data consolidation."
    }
  ],
  "technologies": ["Python", "MySQL", "ETL", "Data Transformation", "Automation"],
  "date": "2023-11-20",
  "blocks": [
    {
      "type": "text",
      "content": "## Overview\n\nThis project involved automating the process of extracting and consolidating data from multiple Excel spreadsheets containing doctor survey responses into a structured MySQL database."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj4_py_sql/Python Project Consolidation1.png",
      "caption": "Example of one of the Excel spreadsheets, 'Jan.xlsx'. Each workbook per month has inconsistent sheet names.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj4_py_sql/Python Project Consolidation2.png",
      "caption": "Data source: Excel workbooks with inpatient data labels such as 'inpatient', 'warded', 'ip', 'in', or 'inp'.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Requirements\n\nOnly data from Excel spreadsheets involving inpatient data are required. Each workbook contains data for a specific month with filenames like 'Jan.xlsx', 'Feb.xlsx', etc. Each Excel spreadsheet is stored as an individual MySQL table named according to the month (e.g., 'in01' for January) to maintain a consistent mapping."
    },
    {
      "type": "text",
      "content": "## Tools Used\n\nPython: The program extracts data from the identified spreadsheets and loads it into the corresponding MySQL tables. The code is reusable and adaptable for future reporting cycles.\n\nMySQL: A SQL query constructs the 'doc_survey' table by combining data from all twelve monthly tables using 'UNION ALL'. Non-valid values (e.g., '99') are converted to NULL, and columns are renamed with meaningful descriptions."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj4_py_sql/Python Project Consolidation3.png",
      "caption": "Final consolidated MySQL table showing cleaned and combined doctor survey data.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Impact of Automation\n\nAutomated Data Extraction: Python script automatically identifies, extracts, and loads data from relevant spreadsheets into individual MySQL tables, reducing manual effort and ensuring accuracy.\n\nStandardised Data Structure: MySQL tables follow a consistent naming convention based on the month of data, improving organisation.\n\nData Cleaning & Transformation: The SQL query consolidates all monthly tables into a single 'doc_survey' table, converts non-valid values to NULL, and assigns meaningful column names.\n\nReusability & Adaptability: The Python script is designed for easy adaptation to changes in file names and spreadsheet labels."
    },
    {
      "type": "text",
      "content": "## Conclusion\n\nThe automation project successfully integrates data from multiple sources into a structured and consistent MySQL table. The Python code is reusable and adaptable for future reporting cycles, facilitating further analysis and reporting."
    },
    {
      "type": "text",
      "content": "The full version of this project was submitted as part of an assessment during the course ANL503: Data Wrangling."
    }
  ]
  },
  {
  "id": "5",
  "title": "Harnessing Data Integration for Enhanced Customer Satisfaction",
  "slug": "customer-360-data-hub-cosmiccart",
  "shortDescription": "A fictional project for CosmicCart that develops a Customer 360 data hub, integrating multiple data sources into a Snowflake data lake and incorporating generative AI to improve customer satisfaction and reduce ticket resolution times.",
  "image": "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
  "photo_credit": "Photo by fauxels from Pexels: https://www.pexels.com/photo/people-discussing-about-graphs-3184360/",
  "tags": ["Data Integration", "Snowflake", "Automation", "Generative AI", "Customer Experience"],
  "externalLinks": [],
  "technologies": ["Snowflake", "Workato", "API Integration", "Zendesk", "Generative AI"],
  "date": "2024-04-16",
  "blocks": [
    {
      "type": "text",
      "content": "## Overview\n\nThis project presents a comprehensive initiative aimed at enhancing customer satisfaction within CosmicCart through the development of a Customer 360 data hub. The project addresses the existing challenges in customer service resulting from fragmented data sources, proposing an integrated solution that streamlines access to customer histories. By automating data loading into a Snowflake data lake and incorporating generative AI assistance for service agents, the project seeks to improve service efficiency, reduce ticket resolution times, and ultimately elevate customer satisfaction (CSAT) scores."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj5_workato/intro1.jpg",
      "caption": "Problem statement: CosmicCart faced declining CSAT scores due to fragmented systems and slow ticket handling.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Problem Statement\n\nCosmicCart has seen a drop in customer satisfaction (CSAT) scores due to slow ticket handling times and incomplete information provided by service agents. This is caused by isolated systems, requiring agents to access multiple applications and manually updated customer data. To resolve these issues, an enterprise data hub is proposed."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj5_workato/intro2.jpg",
      "caption": "Proposed solution: A unified Customer 360 data hub consolidating all data sources.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Proposed Solution\n\nThe data hub will integrate isolated data sources into a single, consolidated data lake, providing a \"Customer 360\" view. This unified data will empower service agents with better insights through Zendesk, improving ticket handling times and personalized responses. The hub also enables the use of generative AI for further productivity enhancements, potentially improving CSAT scores.\n\nBeyond immediate improvements, the hub automates data loading and paves the way for future use cases like AI-driven customer interactions and product recommendations. It also supports collaboration across departments such as marketing."
    },
    {
      "type": "text",
      "content": "## Project Scope and Deliverables\n\nThe project is broken into two phases, with a third reserved for enhancements after phase two:\n\n- **Phase 1**: MVP integrating each unique type of customer data, starting with NinjaVan shipping data.\n- **Phase 2**: Integrating product data from the e-commerce store.\n\n**Key Deliverables:**\n- Data extraction from Salesforce CRM, e-commerce platform, Amazon RDS, Zendesk, Stripe, and NinjaVan APIs.\n- Data processing, standardisation, validation, and enrichment before loading into the Snowflake data lake.\n- Automated data loading into Snowflake to ensure real-time access for service agents.\n- Distribution of data from Customer 360 hub to Zendesk and generative AI applications."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj5_workato/roadmap.jpg",
      "caption": "Implementation roadmap outlining project phases and integrations.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj5_workato/architecture.jpg",
      "caption": "Solution architecture of the Customer 360 data hub and integrations.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Expected Outcomes\n\n- **Reduction in Ticket Resolution Times**: Faster access to complete customer histories reduces handling times.\n- **Enhanced Service Efficiency**: Holistic customer insights improve agent effectiveness and service quality.\n- **Improved CSAT Scores**: Customers feel valued through quicker, more personalised responses."
    },
    {
      "type": "text",
      "content": "## Key Measures of Success\n\n- **Unit of Measure**: Reduction in average ticket resolution time.\n- **Measurement Method**: Tracking average resolution time in Zendesk.\n\nCurrently, resolution averages 10 minutes for 300 daily tickets, slower than the retail benchmark of 324 seconds. Success would mean:\n- A 5-minute reduction in ticket handling time.\n- Cost savings from improved efficiency.\n- Scaling benefits as ticket volume grows."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj5_workato/results.jpg",
      "caption": "Projected improvements: 50% reduction in handling time with AI assistance and data hub integration.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Conclusion\n\nThe implementation of the Customer 360 data hub offers significant improvements in ticket resolution times, agent efficiency, and CSAT scores. By consolidating data and leveraging automation with Snowflake and generative AI, CosmicCart can transform its customer experience operations."
    },
    {
      "type": "text",
      "content": "The full version of this project was submitted as part of the ANL555: Data Integration for Enterprise Automation course."
    }
  ]
  },
  {
  "id": "6",
  "title": "Clustering Analysis of High-Value HDB Resale Flats",
  "slug": "hdb-resale-clustering-analysis",
  "shortDescription": "Analysed over 170,000 HDB resale transactions (2017–2024) to identify key factors influencing 4-room flats exceeding $1 million using K-means clustering and visualisations.",
  "image": "https://images.pexels.com/photos/26765129/pexels-photo-26765129.jpeg",
  "photo_credit": "Photo by brokenadmiral_ from Pexels: https://www.pexels.com/photo/blocks-of-flats-in-city-26765129/",
  "tags": ["HDB", "Clustering", "CRISP-DM", "Tableau", "SPSS Modeler", "Data Analytics"],
  "externalLinks": [],
  "technologies": ["K-means Clustering", "SPSS Modeler", "Tableau", "Python", "Data.gov.sg API"],
  "date": "2024-04-15",
  "blocks": [
    {
      "type": "text",
      "content": "## Overview\n\nThis project analyses the resale values of HDB flats in Singapore, focusing on 4-room flats, to uncover the factors contributing to transactions exceeding $1 million. Using K-means clustering on over 170,000 resale transactions from 2017 to January 2024, the project identifies key characteristics of high-value flats. Insights are structured using the CRISP-DM methodology to empower prospective buyers with data-driven guidance."
    },
    {
      "type": "text",
      "content": "## Business Understanding\n\n4-room HDB flats crossing the $1 million resale mark have become a growing trend in Singapore’s housing market. The objective is to identify the factors driving these high valuations and provide prospective buyers with the knowledge to make better purchasing decisions."
    },
    {
      "type": "text",
      "content": "## Data Understanding\n\nData Source: [HDB Resale Flat Prices dataset](https://data.gov.sg) with 170,000+ records (2017–2024).\n\n**Key variables:**\n- Location (town, block, street, latitude, longitude)\n- Flat type (3-room, 4-room, etc.)\n- Model (e.g., Model A, Type S1)\n- Lease commencement date\n- Lease remaining\n- Resale price\n\n**Derived variables:**\n- Lease Remaining: Converted from text (e.g., '61 years 04 months') to numeric.\n- High Value Flag: Categorised resale prices above $1 million as 1, otherwise 0."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj6_hdb/Data Preparation1.jpg",
      "caption": "Formatting of remaining lease in SPSS Modeler.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj6_hdb/Data Preparation2.jpg",
      "caption": "Transforming remaining lease into numeric values.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj6_hdb/Data Preparation3.jpg",
      "caption": "Geocoding HDB addresses with OneMap API.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Data Preparation\n\n- Converted text-based lease data to numeric years.\n- Created `high_value` column flagging flats above $1M.\n- Geocoded HDB blocks with latitude and longitude.\n- Filtered dataset to include only 4-room flats."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj6_hdb/SPSS modeling1.png",
      "caption": "K-means clustering model built with SPSS Modeler.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj6_hdb/SPSS modeling2.jpg",
      "caption": "Two clusters identified: below $1M vs. above $1M flats.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Modelling and Visualisation\n\nA K-means clustering model was applied, splitting flats into two clusters:\n- **Cluster 1:** Lower-value flats (<$1M), often lower floor, shorter average lease (~78 years).\n- **Cluster 2:** High-value flats (≥$1M), higher floor, longer average lease (~90 years)."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj6_hdb/Tableau viz1.jpg",
      "caption": "Tableau visualisation: storey range and resale value correlation.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj6_hdb/Tableau viz2.jpg",
      "caption": "Geographical distribution of high-value flats across Singapore.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj6_hdb/SPSS viz1.jpg",
      "caption": "Heatmap showing high-value proportions by storey and model type.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Evaluation\n\nThe clustering results confirm that high-value flats are associated with higher storeys and longer remaining leases. Additional visualisation highlights:\n- Flats near central regions are more likely to exceed $1M.\n- Type S1 flats dominate high-value clusters.\n- Some Model A flats also cross $1M if located on higher floors."
    },
    {
      "type": "text",
      "content": "## Deployment\n\nInsights from this analysis empower buyers to:\n- Identify desirable features (higher storey, longer leases, central locations, Type S1).\n- Negotiate effectively with data-backed arguments.\n- Maximise investment potential by targeting key factors of value."
    },
    {
      "type": "text",
      "content": "## Conclusion\n\nThis project demonstrates how clustering and visualisation can reveal key drivers of million-dollar 4-room HDB flats. Factors like storey range, remaining lease, location, and flat model strongly influence resale value."
    },
    {
      "type": "text",
      "content": "The full version of this project was submitted as part of ANL551: Data Analytics for Decision Makers."
    }
  ]
  },
  {
  "id": "7",
  "title": "Forecasting Singapore's Temperatures Using ARIMA Models",
  "slug": "forecasting-singapore-temperatures-arima",
  "shortDescription": "Investigated historical temperature and rainfall data in Singapore to identify trends and forecast future temperatures using ARIMA and ARIMAX models.",
  "image": "https://images.pexels.com/photos/11346139/pexels-photo-11346139.jpeg",
  "photo_credit": "Photo by Ravish Maqsood from Pexels: https://www.pexels.com/photo/a-city-buildings-under-the-blue-sky-with-rainbow-11346139/",
  "tags": ["Forecasting", "Time Series", "ARIMA", "ARIMAX", "R", "Data Analytics"],
  "externalLinks": [
    {
      "label": "View R Code",
      "url": "https://waijie-portfolio.streamlit.app/Forecasting-Temperatures-In-Singapore",
      "description" : "View the R code used for this forecasting project"
    }
  ],
  "technologies": ["R", "ARIMA", "ARIMAX", "Double Exponential Smoothing", "Data Visualization"],
  "date": "2024-11-16",
  "blocks": [
    {
      "type": "text",
      "content": "## Overview\n\nThis project investigated historical temperature and rainfall data in Singapore to identify trends, relationships, and forecast future temperatures. Analysis revealed an upward trend in both average daily maximum and minimum temperatures. Rainfall exhibited a negative correlation with maximum temperature but no significant relationship with minimum temperature. ARIMAX models incorporating rainfall as a predictor outperformed ARIMA models in forecasting both series. Forecasts suggest continued temperature increases, while external factors such as urbanisation and climate patterns may impact long-term trends."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Data_prep1.jpg",
      "caption": "Original Excel dataset extracted using readxl in R.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Data_prep2.png",
      "caption": "Pivoting the dataset from wide to long format for time series extraction.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Data_prep3.png",
      "caption": "Intermediate data shape after filtering and conversion to numeric.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Data_prep4.jpg",
      "caption": "Final time series data prepared and sorted chronologically.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Exploratory Data Analysis\n\nLine plots of average daily maximum and minimum temperatures were generated. Positive trends were verified using linear models: Temperature = β0 + β1*Year + ε, with statistically significant coefficients (max: 0.0178, min: 0.0377). R-squared values indicate high explanatory power, but autocorrelated residuals disqualify the linear model for forecasting. ANOVA tests show no significant seasonal cycles. STL decomposition confirms the positive trend and validates the residuals."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Explore_data1.jpg",
      "caption": "Time series plots for maximum and minimum temperatures.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Explore_data2.jpg",
      "caption": "Linear models confirming statistically significant positive trends.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Explore_data3.jpg",
      "caption": "ANOVA results showing no significant seasonality for yearly series.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Explore_data4.jpg",
      "caption": "STL decomposition plots confirming trend and residual validity.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Forecasting Model Selection\n\nBoth series have trends but no seasonality. Candidate models include ARIMA and double exponential smoothing (DESM). ACF and PACF plots were generated after differencing. Optimal ARIMA models identified: ARIMA(1,1,1) for maximum temperature and ARIMA(0,1,2) for minimum temperature. Model selection was based on statistical significance, AIC, and MAD. DESM performed worse than ARIMA. Model diagnostics confirmed independence, normality, zero mean, and constant variance of residuals."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Model_selection1.jpg",
      "caption": "ACF and PACF plots for average maximum temperature series.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Model_selection2.jpg",
      "caption": "ACF and PACF plots for average minimum temperature series.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Model_selection3.jpg",
      "caption": "Comparison of ARIMA and DESM models for maximum temperature.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Model_selection4.jpg",
      "caption": "Comparison of ARIMA and DESM models for minimum temperature.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Model_selection5.jpg",
      "caption": "Residual diagnostics showing independence for both series.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Model_selection6.jpg",
      "caption": "Residuals histograms confirming normality.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Model_selection7.jpg",
      "caption": "QQ plots confirming residual normality.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Model_selection8.jpg",
      "caption": "Residuals vs predicted values confirming zero mean and constant variance.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Forecasting Results and Discussion\n\nForecasts predict an increase in average maximum and minimum temperatures over the next ten years, with temperatures ranging from 25.8 °C to 32 °C by 2032. Short-term forecasts show steeper increases. External factors such as urbanisation, El Niño, and Indian Ocean Dipole introduce uncertainty. Historical trends partially influenced by the Urban Heat Island effect and mitigation efforts may alter future temperature trends."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Results1.jpg",
      "caption": "Forecasts of maximum and minimum temperatures with ARIMA models.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Incorporating Rainfall Data\n\nRainfall series was prepared similarly to temperature series. Visual inspection showed no obvious trend. Prewhitening using ARIMA(0,0,0) was applied. Cross-correlation function revealed lag 2 of rainfall series (xt) significant for minimum temperature series."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/External predictor1.jpg",
      "caption": "Rainfall time series as external predictor.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/External predictor2.jpg",
      "caption": "Prepared rainfall time series for analysis.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/External predictor3.jpg",
      "caption": "ACF and PACF plots of rainfall series for prewhitening.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/External predictor4.jpg",
      "caption": "Cross-correlation function of residuals from rainfall and temperature series.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/External predictor5.jpg",
      "caption": "Linear model to determine significant lags of rainfall series.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/External predictor6.jpg",
      "caption": "Remaining significant lags after backwards stepwise selection.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/External predictor7.jpg",
      "caption": "ACF and PACF of residuals for linear model to determine ARIMAX order.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Forecasting with ARIMAX Models\n\nARIMAX models with rainfall and lags outperformed ARIMA models, showing lower AIC and MAD. ARIMAX was adopted as the champion model for both maximum and minimum temperature series. Forecasts indicate similar increases in maximum temperatures and faster rises in minimum temperatures in the near term. Short-term forecasts benefit from rainfall data, while long-term forecasts rely on predicted rainfall values and may be less reliable."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Forecast ARIMAX1.jpg",
      "caption": "Comparison of ARIMA and ARIMAX models for maximum temperature series.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Forecast ARIMAX2.jpg",
      "caption": "Comparison of ARIMA and ARIMAX models for minimum temperature series.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj7_forecasting/Forecast ARIMAX3.jpg",
      "caption": "Forecasted values using ARIMAX models compared to ARIMA models.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Conclusion\n\n- Singapore's average temperatures have steadily increased, with a statistically significant upward trend.\n- Both ARIMA and ARIMAX models indicate continued increases over the next decade.\n- Inclusion of rainfall improves short-term forecasts but may lose accuracy for long-term predictions due to forecasted rainfall uncertainty.\n- External factors and mitigation efforts can influence future temperature trends, emphasizing the need for ongoing research."
    },
    {
      "type": "text",
      "content": "The full version of this project was submitted as part of ANL557: Applied Forecasting."
    }
  ]
  },
  {
  "id": "8",
  "title": "NLP Analysis of Financial Analyst Reports",
  "slug": "nlp-financial-analyst-reports",
  "shortDescription": "Applied NLP techniques using FinBERT for sentiment analysis and LDA for topic modeling on financial analyst reports, achieving 69% sentiment accuracy.",
  "image": "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
  "photo_credit": "Photo by Lukas from Pexels: https://www.pexels.com/photo/person-writing-on-notebook-669615/",
  "tags": ["NLP", "Sentiment Analysis", "Topic Modeling", "FinBERT", "LDA", "Financial Analytics", "Python"],
  "externalLinks": [],
  "technologies": ["Python", "FinBERT", "Transformers", "LDA", "PyLDAVis", "Text Preprocessing"],
  "date": "2024-11-20",
  "blocks": [
    {
      "type": "text",
      "content": "## Overview\n\nThis project employed NLP techniques to analyse financial analyst reports. By leveraging the pre-trained transformer-based FinBERT model, sentiment analysis was conducted, achieving 69% accuracy. Latent Dirichlet Allocation (LDA) identified key topics, including company fundamentals, dividend yields, and supply-demand dynamics. This project automates sentiment analysis and topic modelling, supporting more informed financial decision-making.\n\n*Note: Project created for educational purposes using real analyst reports.*"
    },
    {
      "type": "text",
      "content": "## Introduction & Problem Statement\n\nThe financial industry generates massive amounts of text data, and extracting valuable insights manually is time-consuming. Sentiment analysis can reveal market sentiment and investor behavior, improving stock forecasting models. Analyst reports provide expert-driven insights with both subjective and objective statements, making them ideal for topic-based sentiment analysis."
    },
    {
      "type": "text",
      "content": "## Problem Definition\n\nThis project aims to develop an NLP solution that automates sentiment analysis and topic modeling of analyst reports, enabling financial analysts to make informed decisions and improve forecasting accuracy."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj8_nlp/text-preprocessing0.jpg",
      "caption": "Dataset of analyst reports in PDF format used as data source.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Methodology\n\n### Data Collection and Preprocessing\n- Data Extraction: Sentences extracted from the first page of each report.\n- Data Labeling: Each sentence manually labeled as positive, negative, or neutral.\n- Preprocessing: Cleaning, tokenization, stop word removal, and lemmatization."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj8_nlp/text-preprocessing1.jpg",
      "caption": "Text preprocessing including tokenization, stop word removal, and lemmatization.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "### Sentiment Analysis\n- Model Selection: Pre-trained FinBERT from HuggingFace.\n- Implementation: Predicted sentiment as positive, negative, or neutral.\n- Evaluation: Accuracy and F1-score metrics."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj8_nlp/sentiment-analysis1.jpg",
      "caption": "FinBERT model used for sentiment classification.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "### Topic Modeling\n- Feature Extraction: Bag-of-words with bigrams.\n- Model: Latent Dirichlet Allocation (LDA).\n- Implementation: Trained on preprocessed text to identify latent topics.\n- Interpretation: Top words examined to understand each topic."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj8_nlp/sentiment-analysis2.jpg",
      "caption": "Sentiment analysis results using FinBERT achieving 69% accuracy.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "Challenges in sentiment analysis:\n- Financial jargon misclassified.\n- Quantitative comparisons difficult for the model."
    },
    {
      "type": "text",
      "content": "### Topic Modeling Results\nThree main topics identified:\n1. Supply and demand trends\n2. Company fundamentals\n3. Dividend yields and payouts"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj8_nlp/lda-top-words.jpg",
      "caption": "Top 30 words for each identified topic using LDA.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj8_nlp/pyldavis.jpg",
      "caption": "PyLDAVis visualization of topic clusters.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "By combining sentiment analysis and topic modeling, topic-based sentiment insights were obtained, allowing a granular understanding of analyst reports."
    },
    {
      "type": "text",
      "content": "## Conclusion and Recommendations\n\nThe developed NLP solution demonstrates potential for automating sentiment and topic analysis of analyst reports. Areas for improvement:\n- Advanced language models (e.g., ChatGPT-4) to handle financial jargon and quantitative comparisons.\n- Optimized preprocessing for financial domain language.\n- Automated pipelines for PDF extraction and preprocessing.\n\nThese enhancements can provide deeper insights for financial analysts and improve investment decisions."
    },
    {
      "type": "text",
      "content": "The full version of this project was submitted as part of AIB551 - Natural Language Processing."
    }
  ]
  },
  {
  "id": "9",
  "title": "Customer Segmentation with Data Mining",
  "slug": "customer-segmentation-data-mining",
  "shortDescription": "Segmented customers using PCA and K-Means clustering to identify four distinct groups based on demographics and purchasing behavior.",
  "image": "https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg",
  "photo_credit": "Photo by Erik Scheel from Pexels: https://www.pexels.com/photo/person-giving-fruit-to-another-95425/",
  "tags": ["Data Mining", "Customer Segmentation", "K-Means", "PCA", "Python", "Visualization", "Marketing Analytics"],
  "externalLinks": [],
  "technologies": ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "PCA", "K-Means"],
  "date": "2024-11-18",
  "blocks": [
    {
      "type": "text",
      "content": "## Overview\n\nThis project employed data mining techniques to segment customers into distinct groups based on their demographic and purchasing behaviour. PCA was applied to reduce dimensionality, followed by K-Means clustering to identify four customer segments. These insights can help develop targeted marketing strategies and improve customer satisfaction."
    },
    {
      "type": "text",
      "content": "## Data Preprocessing\n The dataset, containing 2240 customer records, was loaded using Pandas. Missing income values were imputed with the mean, as the income distribution was mostly normal. Anomalous entries in `Marital_Status` (e.g., 'Absurd', 'YOLO') were re-categorised as 'Single' to ensure data consistency."
    },
    {
      "type": "text",
      "content": "## Feature Engineering\n New features `Age` and `Tenure` were created from birth year and customer start date, respectively, to make them more interpretable for clustering. Redundant columns like `ID`, `Year_Birth`, and others with no variance were dropped."
    },
    {
      "type": "text",
      "content": "## Outlier Removal & Transformation\n Outliers in key variables such as `Age` and `Income` were identified using the IQR method and removed to prevent skewed results. Categorical variables like `Education` and `Marital_Status` were dummy-encoded, and all variables were standardised using `StandardScaler` to ensure that no single feature dominated the clustering algorithm due to its scale."
    },
    {
      "type": "text",
      "content": "## Data Visualisation\n Histograms confirmed that `Income` and `Age` were approximately normally distributed, while scatter plots revealed a strong positive correlation between income and spending on wine and meat. It was also found that higher-income customers tended to have fewer children at home and that frequent website visitors spent less on average across product categories, suggesting they were likely deal-seekers."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj9_customer_segment/histograms.png",
      "caption": "Histograms of key variables to visualize distributions.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj9_customer_segment/scatter-plot.png",
      "caption": "Scatter plots to visualize relationships between variables.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj9_customer_segment/line-plot.png",
      "caption": "Line plots to inspect trends and distributions.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Principal Component Analysis (PCA)\nTo simplify the 32-column dataset for visualization, Principal Component Analysis (PCA) was used to reduce its dimensionality to three principal components. This transformation was performed using Scikit-learn's PCA module, which helps in capturing the most significant variance in the data within a smaller set of features."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj9_customer_segment/optimal-clusters.png",
      "caption": "Elbow method used to determine optimal number of clusters.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## K-Means Clustering\nTo determine the optimal number of clusters, the K-Means algorithm was run iteratively with an increasing number of clusters, and the inertia was plotted against the cluster count. The resulting elbow plot clearly showed an elbow point at four clusters, indicating that this was the optimal `k` value. The K-Means algorithm was then implemented with `n_clusters = 4`, yielding a silhouette score of 0.411, which suggests that the clusters are moderately well-separated. Finally, the cluster labels were merged with the original, unscaled dataset to interpret the segments based on their original values."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj9_customer_segment/mean-values.jpg",
      "caption": "Mean values of variables for each cluster to interpret characteristics.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Customer Segments and Marketing Implications"
    },
    {
      "type": "text",
      "content": "Segment 1: Budget-Conscious Young Families\nThis low-income group (average 33K) consists of middle-aged adults with children. They are the most price-sensitive, have the lowest spending, but are highly active online, frequently visiting the website and using deals. Marketing should focus on value-driven online promotions."
    },
    {
      "type": "text",
      "content": "Segment 2: Affluent Lifestyle Seekers\nEarning over 80K on average, these well-educated customers have few children and exhibit the highest spending across all product categories, particularly on luxury items like wine. They respond well to campaigns and prefer in-store and catalogue shopping. A VIP loyalty program would be effective for this segment."
    },
    {
      "type": "text",
      "content": "Segment 3: Middle-Income Matured Families\nWith an average income between the other segments, these customers have teenage children and are savvy deal-seekers. Their spending is moderate, and they respond best to bundle deals that cater to the entire family, advertised through both online and in-store channels."
    },
    {
      "type": "text",
      "content": "Segment 4: Practical Affluent Consumers\nSimilar to Segment 2 in income (over 70K) and education, this group prefers spending on food and gold products rather than wine. Despite their high income, they have a low campaign acceptance rate, suggesting that marketing should focus on high-quality food products and cross-category bundles."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj9_customer_segment/clusters.png",
      "caption": "Visualisation of clusters to show distinct customer segments.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Conclusion and Future Directions\n\nClustering successfully identified four distinct customer segments. These insights can guide targeted marketing strategies and enhance customer satisfaction. Future work may explore hierarchical clustering and alternative variable combinations to uncover additional insights."
    },
    {
      "type": "text",
      "content": "The full version of this project was submitted as part of AIB503 - Foundation to Python for AI."
    }
  ]
  },
  {
  "id": "10",
  "title": "Detecting Credit Card Fraud in Transactional Data",
  "slug": "credit-card-fraud-detection-random-forest",
  "shortDescription": "Built and optimized Random Forest models to detect fraudulent credit card transactions in offline and online datasets, achieving F1-scores of 0.85 and 0.89, and reducing fraud losses by up to 83%.",
  "image": "https://images.pexels.com/photos/210742/pexels-photo-210742.jpeg",
  "photo_credit": "Photo by Pixabay from Pexels: https://www.pexels.com/photo/master-card-debit-card-210742/",
  "tags": ["Fraud Detection", "Machine Learning", "Random Forest"],
  "technologies": ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  "date": "2025-04-06",
  "externalLinks": [
      {
        "label": "View Full report",
        "url": "/portfolio/images/proj10_credit_card_fraud/Detecting Credit Card Fraud in Transactional Data.pdf",
        "description": "PDF document containing the full report submitted for the Final Project."
      }
    ],
  "blocks": [
    {
      "type": "text",
      "content": "## Project Overview\nThis project applied machine learning to detect credit card fraud patterns using a large Kaggle transaction dataset, which was separated into offline and online transactions for distinct analysis. The primary objectives were to develop models that could effectively balance precision and recall, surpass a minimum F1-score of 0.80, and deliver a quantifiable business impact by minimizing fraud-related financial losses. The initiative culminated in two champion Random Forest classifiers, each optimized for its specific transactional context."
    },
    {
      "type": "text",
      "content": "## Data Preparation\nThe analysis was performed on a Kaggle dataset comprising transaction logs, user demographics, and merchant details. The initial dataset of approximately 6.7 million transactions from 2015–2019 underwent a rigorous cleaning and preprocessing pipeline. This included standardizing geographical data, filtering for high-volume countries, mapping merchant category codes (MCC) to descriptive labels, and converting data types. Outliers were managed using a conservative IQR-based approach, resulting in a refined dataset of approximately 2.31 million observations ready for analysis."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj10_credit_card_fraud/data_prep.png",
      "caption": "Diagram illustrating the data preparation and cleaning steps.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Exploratory Data Analysis\nExploratory data analysis revealed several key patterns. Fraudulent transactions were typically of higher monetary value and exhibited greater variance than legitimate ones. Demographic analysis indicated that seniors (61+) were disproportionately affected in both online and offline contexts. Furthermore, specific merchant categories with lower transaction volumes showed elevated fraud rates. Temporal analysis of offline data identified peak fraud occurrences during business hours on Thursdays and Fridays, providing valuable insights for feature engineering."
    },
     {
      "type": "image",
      "src": "/portfolio/images/proj10_credit_card_fraud/EDA0.png",
      "caption": "The transactions are split into offline and online transactions datasets, with online transactions having a higher rate of fraud.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj10_credit_card_fraud/EDA1.png",
      "caption": "Fraudalent transactions tend to be of higher value.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj10_credit_card_fraud/EDA2.png",
      "caption": "Seniors 61 and above are most likely to fall victim to fraud.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj10_credit_card_fraud/EDA3.png",
      "caption": "Certain merchant categories were more prone to credit card fraud, especially those with less frequent transactions.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Feature Engineering\nTo enhance model performance, a comprehensive feature engineering process was implemented. Temporal features were extracted from transaction timestamps, while categorical variables were transformed using one-hot and target encoding. The significant class imbalance inherent in fraud detection was addressed by integrating under-sampling techniques into the modeling pipeline, which stabilized training and produced more reliable evaluation metrics."
    },
    {
      "type": "text",
      "content": "## Model Development\nSeven binary classification models (Logistic Regression, Decision Tree, Random Forest, Neural Networks, Gradient Boosting, SVC, and KNN) were benchmarked using 5-fold cross-validation, with the F1-score as the primary evaluation metric. The Random Forest classifier consistently emerged as the best-performing model for both datasets. After hyperparameter tuning, the champion models achieved an F1-score of 0.8499 for the offline dataset and 0.8931 for the online dataset, successfully surpassing the project's target of 0.80."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj10_credit_card_fraud/modelling1.png",
      "caption": "List of classification models considered for this project.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj10_credit_card_fraud/modelling2.png",
      "caption": "Models results for offline transactions before hyperparameter tuning. Random Forest is the best performing model.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj10_credit_card_fraud/modelling3.png",
      "caption": "Models results for offline transactions before hyperparameter tuning. Random Forest is the best performing model.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Model Performance\nAfter threshold tuning, the models demonstrated excellent performance. The offline model achieved an accuracy of 0.9997, precision of 0.9320, and recall of 0.7811. The online model achieved an accuracy of 0.9988, precision of 0.9837, and recall of 0.8178. This balance ensures that a high number of fraudulent transactions are caught without generating an excessive number of false positives."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj10_credit_card_fraud/modelling_final.png",
      "caption": "Models results after tuning, for both offline and online transactions datasets.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj10_credit_card_fraud/modelling_final1.png",
      "caption": "Confusion Matrix for the champion model trained on the offline transactions dataset after tuning.",
      "align": "center"
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj10_credit_card_fraud/modelling_final2.png",
      "caption": "Confusion Matrix for the champion model trained on the online transactions dataset after tuning.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Feature Importance\nAnalysis of the Random Forest models confirmed domain-specific intuitions. For offline transactions, merchant location (city and state) was the most critical predictive feature, highlighting geographical risk factors. In the online context, the unique merchant identifier and merchant category were the most dominant predictors, guiding the model's decision-making process."
    },
    {
      "type": "text",
      "content": "## Business Impact\nThe business impact was quantified by estimating the reduction in financial losses based on a sample of 2000 customers. The model for offline transactions was projected to reduce fraud-related costs by 68.54%. The online model demonstrated even greater efficacy, with a projected cost reduction of 83.37%. The high precision of both models ensures that fraud alerts are reliable, minimizing false positives and operational overhead."
    },
    {
      "type": "image",
      "src": "/portfolio/images/proj10_credit_card_fraud/impact.png",
      "caption": "Estimated impact of using the models for fraud detection.",
      "align": "center"
    },
    {
      "type": "text",
      "content": "## Limitations and Future Work\nKey limitations include the absence of behavioral sequence features and potential biases introduced by the under-sampling method. For deployment, it is recommended to integrate the models into a bank's real-time scoring engine with periodic retraining. Future work could focus on hyperparameter tuning of other models, incorporating explainable AI techniques like SHAP for regulatory compliance, and exploring more advanced features."
    },
    {
      "type": "text",
      "content": "## Note\nThis project was conducted for educational purposes using publicly available data. The results are indicative of the models' potential and would require further validation, production hardening, and governance before live deployment in a commercial environment. The full project report was submitted as part of ANL588 - Applied Project"
    }
  ]
  },
  {
    "id": "11",
    "title": "Automated Scoring of English Essays",
    "slug": "automated-essay-scoring",
    "shortDescription": "An exploration into developing an Automated Essay Scoring (AES) system using Large Language Models. This project focuses on advanced prompt engineering techniques and evaluation methodologies to achieve high agreeableness with human markers.",
    "image": "https://images.pexels.com/photos/18069696/pexels-photo-18069696.png",
    "photo_credit": "Photo by Google DeepMind from Pexels: https://www.pexels.com/photo/an-artist-s-illustration-of-artificial-intelligence-ai-this-illustration-depicts-language-models-which-generate-text-it-was-created-by-wes-cockx-as-part-of-the-visualising-ai-project-l-18069696/",
    "tags": ["LLM", "Prompt Engineering", "Gemini", "NLP", "QWK"],
    "date": "2025-09-26",
    "externalLinks": [
      {
        "label": "View Prompting Results",
        "url": "/portfolio/images/proj11_aes/Prompt Engineering Results.pdf",
        "description": "PDF document showing the prompts used and the results from the LLM on the test set."
      }
    ],

    "blocks": [
      {
        "type": "text",
        "content": "## Project Overview\nThis project assessed the ability to use generative AI and prompt engineering to automate the scoring of English essays. The primary objective was to design a scoring approach using a Large Language Model (LLM) that aligns with a provided rubric for evaluating content and language, enhancing human-AI collaboration to reduce the manual workload for teachers."
      },
      {
        "type": "text",
        "content": "## Prompt Engineering\nThe core task was to design and test prompts on a dataset of 100 essays. The prompt engineering process involved instructing the model to act as an experienced marker, providing it with specific marking rubrics, and using in-context learning (One-shot prompting) to guide its response format. The final prompt requested the model to return the essay ID, a score from 1 to 6, and a concise rationale for its decision. This prompt was then tested on a set of 10 essays to evaluate its effectiveness."
      },
      {
        "type": "text",
        "content": "A key challenge was ensuring scoring consistency across different runs. This was addressed by using a model with a temperature setting of 0 to ensure deterministic outputs. For a real-world scenario, this approach could be improved by using Supervised Fine-Tuning (SFT) on a larger dataset and building an end-to-end automated system that programmatically constructs prompts, calls an LLM via an API, and stores the results in a database for teacher verification."
      },
      {
        "type": "text",
        "content": "## Note\nThis project was created as part of a certain company's job assessment process."
      }
    ]
  }
];

// Sort projects by date (newest first)
export const sortedProjects: ProjectType[] = projects.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});
