var db = {};

// The Times of India
db["timesofindia.indiatimes.com"] = [ ".leftsocial", ".topsocial", ".sidebar",
		".article_content ~ *" ];

// Hindustan Times
db["www.hindustantimes.com"] = [ "#story_right_pnl", ".social_icons",
		".related_story", ".story_comment", ".story_page_content_bg ~ *",
		".fixed_newslettor", "div[id^=zd]", ".channel_ads",
		".story_page_wrapper ~ *" ]

// The Hindu
db["www.thehindu.com"] = [ "#right-column", "#topShare", "#ad-bar",
		".socialbar", "#articleKeywords ~ *", "#th_footer", "#slidebox",
		".ad_text_small", "#vuukle_env" ]

// TechCrunch
db["techcrunch.com"] = [ ".header-social", ".header-ad", ".l-sidebar", ".article-entry ~ *",
		".social-share", ".article-extra", "div[role='main'] ~ *" ]
