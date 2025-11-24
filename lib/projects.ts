import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // メタデータ読み込み用

// プロジェクトコンテンツのパス
const POSTS_PATH = path.join(process.cwd(), 'content/projects');

// ファイル名のリストを取得
export const getSlugs = () => {
  return fs.readdirSync(POSTS_PATH).map(filename => filename.replace(/\.mdx$/, ''));
};

// スラグからプロジェクトのMDXコンテンツとデータを取得
export const getProjectData = async (slug: string) => {
  const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // gray-matterでFrontmatter（メタデータ）とコンテンツを分離
  const { data, content } = matter(fileContents);

  // Dateオブジェクトを文字列に変換
  if (data.date && data.date instanceof Date) {
    data.date = data.date.toISOString().split('T')[0];
  }

  return {
    slug,
    frontmatter: data,
    content,
  };
};

// 全プロジェクトのメタデータを取得（一覧ページ用）
export const getAllProjectsMeta = () => {
  const slugs = getSlugs();
  // 実際はここで各ファイルのメタデータをまとめて取得するロジックを実装
  return slugs.map(slug => {
    const fullPath = path.join(POSTS_PATH, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    // Dateオブジェクトを文字列に変換
    if (data.date && data.date instanceof Date) {
      data.date = data.date.toISOString().split('T')[0];
    }

    return { slug, ...data };
  });
};