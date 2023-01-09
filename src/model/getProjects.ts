import { ProjectType } from "../type";

export const getProjects = (): ProjectType[] => {
  const profilesProject: ProjectType = {
    name: "Github profiles",
    description: `Приложение позволяет находить пользователей по логину, отображает
  их репозитории, а так же дает возможность просматривать коммиты в
  репозиториях пользователя. Используется API github.`,
    url: "https://github-profiles-khaki.vercel.app/",
    previewImgUrl: "https://iili.io/HBmrqRR.png",
    repoUrl: "https://github.com/Concat17/github-profiles",
  };

  const todoProject: ProjectType = {
    name: "Todo",
    description: `Приложение Todo, имеющее следующий функционал: создание,
    редактирование и удаление todo, возможность выбирать дату
    истечения задания и возможность прикреплять файлы.`,
    url: "https://todo-mu-sepia.vercel.app/",
    previewImgUrl: "https://iili.io/HBmSlx1.png",
    repoUrl: "https://github.com/Concat17/todo",
  };

  const adviserProject: ProjectType = {
    name: "Adviser",
    description: `Приложение, показывающее советы`,
    url: "https://adviser-xi.vercel.app/",
    previewImgUrl: "https://iili.io/H7dG7mN.png",
    repoUrl: "https://github.com/Concat17/adviser",
  };

  return [profilesProject, todoProject, adviserProject];
};
