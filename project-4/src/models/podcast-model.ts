//interface é como uma forma em que os dados devem seguir para
//assim sempre estar padronizados

export interface PodcastModel {
  podcastName: string;
  episode: string;
  videoId: string;
  categories: string[];
}
