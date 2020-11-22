export const menu = [
  {
    id: 1,
    type: "king",
    title: "king 1",
    child: true,
  },
  {
    id: 2,
    type: "king",
    title: "king 2",
    child: true,
  },
  {
    id: 3,
    type: "king",
    url: "/",
    title: "king 3",
    child: false,
  },

  //   ---------
  {
    id: 4,
    type: "worker",
    title: "worker 1",
    url: "/",
    child: false,
  },
  {
    id: 5,
    type: "worker",
    title: "worker 2",
    child: true,
  },
  {
    id: 6,
    type: "worker",
    title: "worker 3",
    child: true,
  },
  //   ----
  {
    id: 7,
    type: "buxgalter",
    title: "buxgalter 1",
    child: true,
  },
  {
    id: 8,
    type: "buxgalter",
    title: "buxgalter 2",
    child: true,
  },
];

export const menuChild = [
  {
    id: 1,
    parentId: 1,
    type: "king",
    url: "/",
    title: "king 1.1",
  },
  {
    id: 2,
    parentId: 1,
    type: "king",
    url: "/",
    title: "king 1.2",
  },
  {
    id: 3,
    parentId: 1,
    type: "king",
    url: "/",
    title: "king 1.3",
  },
  {
    id: 4,
    parentId: 2,
    type: "king",
    url: "/",
    title: "king 2.1",
  },
  {
    id: 5,
    parentId: 2,
    type: "king",
    url: "/",
    title: "king 2.2",
  },
  //   -------
  {
    id: 6,
    parentId: 5,
    type: "worker",
    url: "/",
    title: "worker 2.1",
  },
  {
    id: 7,
    parentId: 5,
    type: "worker",
    url: "/",
    title: "worker 2.2",
  },
  {
    id: 8,
    parentId: 6,
    type: "worker",
    url: "/",
    title: "worker 2.3",
  },
  //   ----
  {
    id: 9,
    parentId: 7,
    type: "buxgalter",
    url: "/",
    title: "buxgalter 1.1",
  },
  {
    id: 10,
    parentId: 7,
    type: "buxgalter",
    url: "/",
    title: "buxgalter 1.2",
  },
  {
    id: 11,
    parentId: 8,
    type: "buxgalter",
    url: "/",
    title: "buxgalter 2.1",
  },
  {
    id: 12,
    parentId: 8,
    type: "buxgalter",
    url: "/",
    title: "buxgalter 2.2",
  },
  {
    id: 13,
    parentId: 8,
    type: "buxgalter",
    url: "/",
    title: "buxgalter 2.3",
  },
];
