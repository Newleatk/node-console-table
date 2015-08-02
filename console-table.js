exports.init = (function(options){
	options = {padding: 1}
	return {
		data: function(data){
			max = [];
			for(row of data){
				c = 0;
				for(cell of row){
					max[c] = max[c] > cell.c.length ? max[c] : cell.c.length;
					c++; 
				}
			}
			delete c;
			for(row of data){
				c = 0;
				for(cell of row){
					while(cell.c.length < max[c]){
						cell.c = cell.c + " ";
					}
					c++; 
				}
				delete c;
			}
			w = max.length + 1 + (max.length * 2 * options.padding);
			for(c of max){
				w = w + c;
			}
			return {
				render: function(){
				}
			}
		}
	}
});