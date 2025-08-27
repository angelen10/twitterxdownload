export default async function sitemap() {
    // 🔹 修改 1：改成你自己的域名
    const baseUrl = 'https://www.xdownloader.shop'; // ✅ 修改为自己的域名

    // 🔹 保留 fetch 旧站 API 来获取推文数据（方案 A）
    const apiUrl = 'https://twitterxdownload.com/api/requestdb?action=all'; // ❌ 这里仍然可以用旧站 API

    // 获取最新推文用于 sitemap
      const tweets = await fetch(apiUrl, { cache: 'no-store' })
    .then(res => res.json())
    .then(data => data.data || [])
    .catch(() => []);

    // 🔹 静态页面 URL 使用自己的域名
  const staticPages = [
    { url: `${baseUrl}/en`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/zh-CN`, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/downloader`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/tweets`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/terms-of-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  // 🔹 动态推文页面 URL 也使用自己的域名
  const tweetPages = tweets.map(tweet => ({
    url: `${baseUrl}/tweets/${tweet.tweet_id}`, // ✅ 修改为自己的域名
    lastModified: new Date(tweet.post_at || Date.now()),
    changeFrequency: 'never',
    priority: 1.0,
  }));

  return [...staticPages, ...tweetPages];
}

// 🔹 保留动态生成配置
export const dynamic = 'force-dynamic';
export const revalidate = 86400; // 每天更新一次