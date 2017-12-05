({
	packItem: function(component, event, helper) {
        var getItem = component.get("v.item", true);
        getItem.Packed__c = true;
        component.set("v.item", getItem);
        var btnClicked = event.getSource();
        btnClicked.set("v.disabled", true);
        console.log(btnCliked);        
	}
})
