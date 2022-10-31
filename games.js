const games = {
    "omega-engine": {
        "goals": [
            game => game !== undefined
        ],
        "save": "ωEngine",
        "saveParser": function(save) {
            const reviver = function(key, value)
            {
                if(key === "theme") return value;
                if(typeof value === "string" && value.startsWith("d"))
                {
                    return new Decimal(value.replace("d", ""));
                }
                return value;
            };
            loadObj = JSON.parse(decodeURIComponent(escape(atob(save))), reviver);
        }
    }
}