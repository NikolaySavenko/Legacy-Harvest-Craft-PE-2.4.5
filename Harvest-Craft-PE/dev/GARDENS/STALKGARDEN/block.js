IDRegistry.genBlockID("stalkgarden"); //PlantModel
Block.createBlock("stalkgarden", [
	{name: "Stalk garden", texture: [["empty", 0],["empty", 0],["stalkgarden", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
//PlantModel.tree(BlockID.stalkgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.stalkgarden,
	drop:0,
	seed:ItemID.stalkGardenITEM
});
Block.registerDropFunction("stalkgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.bean,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.bellpepper,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.chili_pepper,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.okra,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.eggplant,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.peas,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.tomato,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.soybean,Random.Int(1,3), 0]);
	}
	return drop;
});