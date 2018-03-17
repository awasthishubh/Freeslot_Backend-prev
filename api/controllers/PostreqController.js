/**
 * Slot_infoController
 *
 * @description :: Server-side logic for managing Slot_infos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res) {
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		name=req.param('name');
		reg=req.param('reg');
		phno=req.param('phno');
		email=req.param('email');
		slot=req.param('slot');

		if(!email || !reg || !phno || !phno || !phno || !email || !slot || !name) return res.json({err:"Incomplete Request",status:0});
		if(typeof(slot)!="object") return res.json({err:"Invalid Slot format", status:0});

		var k=[];

		slot.forEach(function(value){
			var l=parseInt(value)%100;
  			k.push(l);
		});

		var freeSlot=[];
		for (var i = 1; i<=98; i++){
			if(k.indexOf(i) > -1) continue;
			freeSlot.push(i);
		};

		Slot_info.find({'reg':reg}).exec(function (err, record){
		  if (err) { return res.serverError(err); }
		  else if (record.length>0) return res.json({message:'Go Back! You have already regestered',status:0});
		  else
		  	Slot_info.create({'name':name, 'reg':reg, 'phno':phno, 'email':email, 'slot':k, 'freeSlot':freeSlot}).exec(function(err, record){
			if(err) return res.json(500,{message:'No Idea'});
			return res.json(200,{data:record, status:1});
			});
		});

		

		//return res.json(200,{message:freeSlot, asd:k});

	},

	load: function(req, res){
		res.view('send/index2');
	}
	
};

