var RoleCards = [
  {
    name: "近卫",
    image: "jinwei.png"
  },
  {
    name: "天灾",
    image: "tianzai.png"
  },
];

var BloodCards = [
  {
    name: "6点",
    image: "blood-6.png"
  },
  {
    name: "8点",
    image: "blood-8.png"
  },
  {
    name: "10点",
    image: "blood-10.png"
  },
  {
    name: "12点",
    image: "blood-12.png"
  },
  {
    name: "14点",
    image: "blood-14.png"
  },
];

var MagicCards = [
  {
    name: "3点",
    image: "magic-3.png"
  },
  {
    name: "4点",
    image: "magic-4.png"
  },
  {
    name: "5点",
    image: "magic-5.png"
  },
  {
    name: "6点",
    image: "magic-6.png"
  },
  {
    name: "7点",
    image: "magic-7.png"
  },
];

var PositionCards = [
  {
    name: "12点",
    image: "position.png"
  }
];

var BasicCards = [
  {
    name: "治疗药膏",
    cost: "0",
    time: "1",
    distance : "0",
    icon: "zhiliaoyaogao_icon.jpg",
    desc: "恢复1点体力"
  },
  {
    name: "净化药水",
    cost: "0",
    time: "1",
    distance : "0",
    icon: "jinghuayaoshui_icon.jpg",
    desc: "恢复1点魔力"
  },
  {
    name: "回城卷轴",
    cost: "0",
    time: "1",
    distance : "-",
    icon: "huichengjuanzhou_icon.gif",
    desc: "下一回合前若为未被打断，回到起点，否则无效。"
  },
  {
    name: "速度之靴",
    cost: "0",
    trigger: "被",
    time: "0",
    distance : "-",
    icon: "",
    desc: "增加1点移动范围"
  },
];

var CardSet = [
  { number: "0", color: 0, name:""},
  { number: "0", color: 0, name:""},
  { number: "0", color: 0, name:""},
  { number: "0", color: 0, name:""},
  { number: "0", color: 0, name:""},
  { number: "0", color: 0, name:""},
  { number: "0", color: 0, name:""},
];

var HeroCards = [
   {
      name : "奥林匹斯之王",
      icon : "zeus.jpg",
      image : "zeus_large.jpg",
      type : "智力",
      attack : "远程",
      red : 10,
      blue : 8,
      skill : [
          "弧形闪电:魔耗3/距离2/间隔1。施法者会指定最多3个受伤目标，分别造成1点伤害。第一个目标必须在施法距离内，目标之间距离不超过1",
          "雷击:魔耗3/距离3/间隔1。从天空召唤一道闪电对目标造成3点伤害",
          "雷神之怒:魔耗4/距离无/间隔3。用闪电同时打击所有的非隐身的敌方，造成2点伤害"
      ]
    },
    {
      name : "水晶室女",
      icon : "bingnv.jpg",
      image : "bingnv.jpg",
      type : "智力",
      attack : "远程",
      red : 10,
      blue : 8,
      skill : [
          "冰封禁制:魔耗2/距离3/间隔1。目标不能移动和物理攻击,持续1回合，同时造成1伤害",
          "辉煌光环:魔耗0/距离无/间隔0。所有友方单位回复1点魔法",
          "极寒领域:魔耗4/距离无/间隔3。施法单位周围距离2以内的敌方单位受到2点伤害"
      ]
    },
    {
      name : "治疗药膏",
      icon : "zhiliaoyaogao_icon.jpg",
      image : "zhiliaoyaogao_icon.jpg",
      type : "",
      attack : "",
      red : 1,
      blue : 0,
      skill : [
          "回复指定单位1点体力"
      ]
    },
    {
      name : "净化药水",
      icon : "jinghuayaoshui_icon.jpg",
      image : "jinghuayaoshui_icon.jpg",
      type : "",
      attack : "",
      red : 1,
      blue : 0,
      skill : [
          "回复指定单位1点魔力"
      ]
    },
     {
      name : "火枪手",
      icon : "huoqiang_icon.gif",
      image : "huoqiang_icon.gif",
      type : "敏捷",
      attack : "远程",
      red : 10,
      blue : 8,
      skill : [
          "爆头:魔耗0/距离x/间隔0。当物理攻击目标是，目标需要判定，如果是红色牌将额外受到一点伤害",
          "瞄准:魔耗0/距离x/间隔0。火枪手的攻击距离比别人多1，为3。",
          "暗杀:魔耗4/距离4/间隔3。火枪手能远距离暗杀目标,造成3点伤害"
      ]
    },
    {
      name : "幻影刺客",
      icon : "huanyingcike_icon.gif",
      image : "huanyingcike_icon.gif",
      type : "敏捷",
      attack : "进程",
      red : 10,
      blue : 8,
      skill : [
          "闪烁突袭:魔耗2/距离3/间隔1。瞬间移动到敌方单位相同位置，并且额外增加一次物理攻击",
          "模糊:魔耗0/距离x/间隔0。受到物理攻击时，需要判定如果为红桃表示闪避此次攻击",
          "恩赐解脱:魔耗0/距离0/间隔0。发出物理攻击，判定如果为黑色1~2将造成4倍伤害"
      ]
    },
];
