(function (global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory(); // For Node.js
    } else {
        global.AvatarGenerator = factory(); // For browsers
    }
})(this, function () {
    const AvatarGenerator = {
        get_color: function () {
            const colors = [
                "#FF5733", "#33FF57", "#3357FF", "#F39C12",
                "#8E44AD", "#1ABC9C", "#E74C3C", "#2ECC71",
                "#3498DB", "#9B59B6", "#E67E22", "#D35400",
                "#16A085", "#34495E",
            ];

            return colors[Math.floor(Math.random() * colors.length)];
        },

        process_name: function (string) {
            let new_string;

            if (string.split(" ")[1] === undefined) {
                new_string = string.slice(0, 2).toUpperCase();
            } else {
                new_string = (string.split(" ")[0][0] + string.split(" ")[1][0]).toUpperCase();
            }

            return new_string;
        },

        generateAvatar: function (text) {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            const new_text = this.process_name(text);

            canvas.width = 200;
            canvas.height = 200;

            context.fillStyle = this.get_color();
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.font = "bold 100px Arial";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(new_text, canvas.width / 2, canvas.height / 2);

            return canvas.toDataURL("image/png");
        },

        generateAvatarWithColor: function (text, color) {
            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");

            const new_text = this.process_name(text);

            canvas.width = 200;
            canvas.height = 200;
''
            context.fillStyle = color;
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.font = "bold 100px Arial";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(new_text, canvas.width / 2, canvas.height / 2);

            return canvas.toDataURL("image/png");
        },
    };

    return AvatarGenerator;
});
