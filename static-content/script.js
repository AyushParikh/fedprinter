function vote(vote){
    $.ajax({
        method: "POST",
        url: "/api/vote/",
        data: {
            vote : vote
        },
        success: function(data){
            document.getElementById("vote").style.display="none"
            var bulls = data.bulls;
            var bears = data.bears;
            var total = bulls+bears;
            var bull=Math.floor(Math.round((bulls/total) * 100) / 100*100);
            var bear=Math.floor(Math.round((bears/total) * 100) / 100*100);
            console.log(bulls,bears,total, bull,bear);
            var label = document.createElement("label");
            if (vote == 1){
                label.innerHTML="<mark>"+bull+"%</mark> of people are feeling bullish for tomorrow!"
            } else {
                label.innerHTML="<mark>"+bear+"%</mark> of people are feeling bearish for tomorrow!"
            }

            var parent = document.getElementById("parent-box");
            parent.appendChild(label)
        }
    })
}