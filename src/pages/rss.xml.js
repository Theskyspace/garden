import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = (await getCollection('writing', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.tended.getTime() - a.data.tended.getTime()
  );
  return rss({
    title: 'Akash Joshi — Writing',
    description: 'Notes, essays, and seedlings. Part garden, part profile.',
    site: context.site,
    items: notes.map((n) => ({
      title: n.data.title,
      description: n.data.description,
      pubDate: n.data.tended,
      link: `/writing/${n.id}/`,
    })),
  });
}
