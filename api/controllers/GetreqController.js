/**
 * GetreqController
 *
 * @description :: Server-side logic for managing Slot_infos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");

		slot=parseInt(req.param('slot'))%100;

		Slot_info.find({}).exec(function(err, records){
			if(err) return res.serverError(err);
			data=[];
			records.forEach(function(record){
				if(record.freeSlot.indexOf(slot)>-1)
					data.push(record);

			});

			if(!slot) return res.json({records,"status":0});
			else if(data.length==0) return res.json({data:data, status: 0,msg:'No one\'s free'});
			else return res.json({data:data, status: 1});
		});

	}
};

