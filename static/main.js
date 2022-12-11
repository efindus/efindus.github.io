if ('serviceWorker' in navigator)
	navigator.serviceWorker.register('/sw.js');

const reference = new Date();
const hBegin = new Date(reference.getFullYear(), 9, 20, 0, 0, 0, 0);
const hEnd = new Date(reference.getFullYear(), 10, 10, 0, 0, 0, 0);

let spiderController;
if (hBegin.getTime() <= Date.now() && Date.now() <= hEnd.getTime()) {
	spiderController = new SpiderController({
		imageSprite: "https://efindus.xyz/static/spider.png",
		num_frames: 6,
		bugWidth: 118,
		bugHeight: 102,
		canFly: false,
		canDie: true,
		zoom: 5,
		minDelay: 10,
		maxDelay: 100,
		minBugs: Math.round((document.body.clientWidth / 400) * 1.5),
		maxBugs: Math.round((document.body.clientWidth / 400) * 3.5),
		mouseOver: 'die'
	});
}
