/**
 * DeletereqController
 *
 * @description :: Server-side logic for managing Slot_infos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req,res) {
		res.header("Access-Control-Allow-Origin", "*");
  		res.header("Access-Control-Allow-Headers", "X-Requested-With");
		reg=req.param('reg');
		Slot_info.destroy({'reg':reg}).exec(function (err,data) {
			if(err) return res.serverError(err);
			if(data.length==0) res.json({msg: "Invalid reg",status:0, data:{}});
			else res.json({data:data, status:1});
		});
	}
	
};

