IDRegistry.genBlockID("leafygarden"); //PlantModel
Block.createBlock("leafygarden", [
	{name: "Leafy garden", texture: [["empty", 0],["empty", 0],["leafygarden", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
//PlantModel.tree(BlockID.leafygarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.leafygarden,
	drop:0,
	seed:ItemID.leafyGardenITEM
});
Block.registerDropFunction("leafygarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.artichoke,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.broccoli,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.brusselsprout,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.cabbage,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.cauliflower,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.leek,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.lettuce,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.scallion,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.spinach,Random.Int(1,3), 0]);
	}
	return drop;
});