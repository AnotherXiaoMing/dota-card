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
    icon: "zhiliaoyaogao_icon.jpg",
    desc: "恢复1点体力，可对友方使用"
  },
  {
    name: "净化药水",
    cost: "0",
    icon: "jinghuayaoshui_icon.jpg",
    desc: "恢复1点魔力，可对友方使用"
  },
  {
    name: "回城卷轴",
    cost: "0",
    icon: "huichengjuanzhou_icon.gif",
    desc: "消耗1秒。下一回合前若为未被打断，回到起点，否则无效。"
  },
  {
    name: "速度之靴",
    cost: "0",
    icon: "suduzhixue_icon.png",
    desc: "移动范围+1"
  },
  {
    name: "哨岗守卫",
    cost: "0",
    icon: "shaogangshouwei_icon.gif",
    desc: "距离范围内敌方英雄隐身无效"
  },
  {
    name: "显隐之尘",
    cost: "0",
    icon: "xianyinzhichen_icon.gif ",
    desc: "距离范围内敌方英雄处于显隐状态"
  },
  {
    name: "加速手套",
    cost: "0",
    icon: "jiasushoutao_icon.gif",
    desc: "攻击时间-1"
  },
  {
    name: "假腿",
    cost: "1",
    icon: "jiatui_icon.gif ",
    desc: "移动范围+1,攻击时间-1"
  },
  {
    name: "相位鞋",
    cost: "1",
    icon: "xiangweixie_icon.gif",
    desc: "移动范围+2"
  },
  {
    name: "远行鞋",
    cost: "1",
    icon: "yuanxingxie_icon.gif",
    desc: "移动范围+2；可以回城，消耗1点魔法，需要持续到下回合前，被打断后无效。"
  },
  {
    name: "力量手套",
    cost: "0",
    icon: "liliangshoutao_icon.gif",
    desc: "恢复1点体力"
  },
  {
    name: "力量腰带",
    cost: "1",
    icon: "liliangyaodai_icon.gif",
    desc: "恢复2点体力"
  },
  {
    name: "力量之斧",
    cost: "2",
    time: "0",
    distance : "-",
    icon: "liliangzhifu_icon.gif",
    desc: "恢复3点体力"
  },
  {
    name: "智力斗篷",
    cost: "0",
    icon: "zhilidoupeng_icon.gif",
    desc: "恢复1点魔力"
  },
  {
    name: "法师长袍",
    cost: "1",
    icon: "fashichangpao_icon.gif",
    desc: "恢复2点魔力"
  },
  {
    name: "魔力法杖",
    cost: "2",
    icon: "molifazhang_icon.gif",
    desc: "恢复3点魔力"
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
      attack : "中程",
      red : 10,
      blue : 8,
      skill : [
          "弧形闪电:魔耗3/距离2。施法者会指定最多3个受伤目标，分别造成1点伤害。第一个目标必须在施法距离内，目标之间距离不超过1",
          "雷击:魔耗3/距离3。从天空召唤一道闪电对目标造成3点伤害",
          "雷神之怒:魔耗4/无距离。用闪电同时打击所有的非隐身的敌方，造成1点伤害"
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
          "冰封禁制:魔耗2/距离3。目标不能移动和物理攻击，持续1回合，同时造成1伤害",
          "辉煌光环:魔耗0/无距离。所有友方单位回复1点魔法",
          "极寒领域:魔耗4/无距离。施法单位周围距离1以内的敌方单位受到2点伤害"
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
          "爆头:被动。当物理攻击目标时，进行判定，如果是红色牌将额外受到1点伤害",
          "瞄准:被动。火枪手的攻击距离为3。",
          "暗杀:魔耗4/距离4。火枪手能远距离暗杀目标,造成3点伤害"
      ]
    },
    {
      name : "幻影刺客",
      icon : "huanyingcike_icon.gif",
      image : "huanyingcike_icon.gif",
      type : "敏捷",
      attack : "近程",
      red : 10,
      blue : 8,
      skill : [
          "闪烁突袭:魔耗2/距离2。瞬间移动到敌方单位相同位置，并且立即对目标造成1次物理攻击",
          "模糊:被动。受到物理攻击时，需要判定如果为红桃表示闪避此次攻击",
          "恩赐解脱:被动。发出物理攻击，判定为黑桃将造成4倍伤害"
      ]
    },
];
