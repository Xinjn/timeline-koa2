// const { exec } = require("../db/mysql");

// 获取热榜列表数据
const getHotList = async () => {
  // 假数据
  return await [
    {
      id: "8IZZayx7rUy",
      title: "劳荣枝案",
    },
    {
      id: "8Id3x45f6Uc",
      title: "长沙湘雅二院医生被爆医疗作风有问题",
    },
    {
      id: "8IbFycRPyvZ",
      title: "重庆山火",
    },
    {
      id: "8IcvwyIX6Ux",
      title: "立陶宛涉台事件",
    },
    {
      id: "8IQGWAvErEF",
      title: "广西藤县男童山中走失",
    },
    {
      id: "8Ia4fPzu2WV",
      title: "青海西宁山洪",
    },
    {
      id: "8Ia7ukGed8G",
      title: "港独组织人员黄之锋被抓",
    },
    {
      id: "8Ia8Dj5ajyr",
      title: "茶颜悦色首店在南京开业",
    },
    {
      id: "8Ia9oTzklEi",
      title: "高温导致川渝电力形势严峻",
    },
    {
      id: "8IYMGycNke0",
      title: "县领导号召干部带头买房",
    },
  ];

  // 数据库：真数据
  // let sql = `select * from hotlist;`;
  // return await exec(sql);
};

// 获取最近更新接口
const getUpdateNode = async () => {
  return await {
    list: [
      {
        img: [],
        interaction: {
          comment: 6,
        },
        milestone: 0,
        nodeId: "8Id9juBNUya",
        nodeTime: 1660965840,
        timelineId: "8IZZayx7rUy",
        title: "劳荣枝案辩方新证据称其善良不虚荣",
        updateTime: 1660970525,
      },
      {
        img: [],
        interaction: {
          comment: 6,
        },
        milestone: 0,
        nodeId: "8Id8F39awur",
        nodeTime: 1660965000,
        timelineId: "8Ia4fPzu2WV",
        title: "山洪袭大通：有人跳入洪水救出邻居家祖孙俩",
        updateTime: 1660969790,
      },
      {
        img: [
          {
            url: "https://x0.ifengimg.com/ucms/2022_34/9A3D053BB2E2E4E4FCA50DCAE7C878B6FFA1DBE2_size493_w1073_h593.png",
          },
        ],
        interaction: {
          comment: 8,
        },
        milestone: 0,
        nodeId: "8Id5otZh8rI",
        nodeTime: 1660896854,
        timelineId: "8IcvwyIX6Ux",
        title: "外交部：敦促立方认清是非，不要再蚕食双边合作的政治基础",
        updateTime: 1660967071,
      },
      {
        img: [],
        interaction: {
          comment: 10,
        },
        milestone: 0,
        nodeId: "8Id5syGfJ9O",
        nodeTime: 1660923742,
        timelineId: "8Id3x45f6Uc",
        title: "同行称湘雅医生被举报内容令人咋舌",
        updateTime: 1660967043,
      },
      {
        img: [
          {
            url: "https://x0.ifengimg.com/ucms/2022_34/E5095A9916C85E02FEF18700F141076814CFA6EB_size31_w640_h250.jpg",
          },
        ],
        interaction: {
          comment: 9,
        },
        milestone: 0,
        nodeId: "8Id3x45f6X0",
        nodeTime: 1660303546,
        timelineId: "8IcvwyIX6Ux",
        title: "立陶宛交通与通讯部副部长窜访中国台湾地区，中方宣布制裁措施",
        updateTime: 1660966923,
      },
      {
        img: [
          {
            url: "https://x0.ifengimg.com/ucms/2022_34/9AC7A4C4F38F7061315E97C11BA36EE9AD0C798D_size346_w1480_h1563.jpg",
          },
        ],
        interaction: {
          comment: 8,
        },
        milestone: 0,
        nodeId: "8Id5F3KxoBE",
        nodeTime: 1660807273,
        timelineId: "8Id3x45f6Uc",
        title: "长沙湘雅二院通报网传医生作风问题：已免职",
        updateTime: 1660966921,
      },
      {
        img: [],
        interaction: {
          comment: 1,
        },
        milestone: 0,
        nodeId: "8Id5otZh8pb",
        nodeTime: 1660210575,
        timelineId: "8IcvwyIX6Ux",
        title: "立陶宛交通与通讯部副部长率团访台，外交部：强烈谴责 坚决回击",
        updateTime: 1660966831,
      },
      {
        img: [],
        interaction: {
          comment: 8,
        },
        milestone: 0,
        nodeId: "8Id5J945Hjt",
        nodeTime: 1660799309,
        timelineId: "8Id3x45f6Uc",
        title: "长沙一医生被爆医疗作风有问题 医院回应：已停职 正接受调查",
        updateTime: 1660966783,
      },
      {
        img: [],
        interaction: {
          comment: 7,
        },
        milestone: 0,
        nodeId: "8Id5syGfJ7X",
        nodeTime: 1659752642,
        timelineId: "8IcvwyIX6Ux",
        title: "立陶宛称与欧洲国家讨论“共同访台”",
        updateTime: 1660966772,
      },
      {
        img: [
          {
            url: "https://x0.ifengimg.com/ucms/2022_34/5726731700B5C77987C4BD061190D0BE5B3046EB_size32_w640_h483.jpg",
          },
        ],
        interaction: {
          comment: 6,
        },
        milestone: 0,
        nodeId: "8Id5syGfJ6v",
        nodeTime: 1643357041,
        timelineId: "8IcvwyIX6Ux",
        title: "立陶宛总统要求修正涉台机构名称，外交部回应",
        updateTime: 1660966640,
      },
    ],
    pagination: {
      page: 1,
      size: 10,
      total: 200,
    },
  };
};

// 加入追踪
const postFollows = async (id) => {
  return true;
};

// 取消追踪
const deleteFollows = async (id) => {
  return true;
};

module.exports = {
  getHotList,
  getUpdateNode,
  postFollows,
  deleteFollows,
};
