"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Star, Code } from "lucide-react";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};

async function fetchGitHubRepos(username: string, limit = 24): Promise<GitHubRepo[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=${limit}&sort=updated`,
    {
      headers: { Accept: "application/vnd.github+json" },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

export default function GitHubPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setError(null);
        setLoading(true);
        const data = await fetchGitHubRepos("gazmaths", 24);
        setRepos(data);
      } catch (err: any) {
        setError(err?.message ?? "Failed to load repositories");
        // eslint-disable-next-line no-console
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  return (
    <main className="flex-1 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">GitHub Repositories</h1>
        <p className="text-xl text-gray-600 mb-8">Explore my projects and contributions</p>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
            </div>
            <p className="mt-4 text-gray-600">Loading repositories...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            {error}{" "}
            <a
              className="text-blue-700 underline"
              href="https://github.com/gazmaths?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Open on GitHub
            </a>
          </div>
        )}

        {!loading && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 hover:border-blue-400 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition flex-1">
                    {repo.name}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition flex-shrink-0 ml-2" />
                </div>

                {repo.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{repo.description}</p>
                )}

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  {repo.language && (
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Code className="w-4 h-4" />
                      <span>{repo.language}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <Star className="w-4 h-4" />
                    <span>{repo.stargazers_count}</span>
                  </div>

                  <div className="text-xs text-gray-500 ml-auto">
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        {!loading && repos.length === 0 && !error && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-500">No repositories found</p>
          </div>
        )}
      </div>
    </main>
  );
}
