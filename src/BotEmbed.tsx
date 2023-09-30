Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var bs = require('react-icons/bs');
var ai = require('react-icons/ai');
var tb = require('react-icons/tb');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function BotEmbed(props) {
    var _this = this;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    var _t = React.useState(false), showChatBox = _t[0], setShowChatBox = _t[1];
    var _u = React.useState(props.title), title = _u[0], setTitle = _u[1];
    var _v = React.useState(require("./boticon.png").default), profileImage = _v[0], setProfileImage = _v[1];
    var _w = React.useState(""), description = _w[0], setDescription = _w[1];
    // const [color, setColor] = React.useState<string>(colors[props?.theme]?.primary)
    var _x = React.useState(""), message = _x[0], setMessage = _x[1];
    var _y = React.useState([]), chats = _y[0], setChats = _y[1];
    var _z = React.useState(null), chatsUpdater = _z[0], setChatsUpdater = _z[1];
    var embedRef = React.useRef(null);
    // IF YOU ARE HERE, YOU ARE NOT SUPPOSED TO BE HERE
    var getBotInfo = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data;
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, fetch("https://server.humanizeai.in/get-my-bot-details", {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "x-api-key": props.apiKey,
                        }
                    })];
                case 1:
                    response = _d.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _d.sent();
                    console.log(data);
                    if (data === null || data === void 0 ? void 0 : data.success) {
                        setTitle((_a = data === null || data === void 0 ? void 0 : data.data) === null || _a === void 0 ? void 0 : _a.name);
                        setProfileImage((_b = data === null || data === void 0 ? void 0 : data.data) === null || _b === void 0 ? void 0 : _b.pic);
                        setDescription((_c = data === null || data === void 0 ? void 0 : data.data) === null || _c === void 0 ? void 0 : _c.description);
                    }
                    else {
                        console.log(data === null || data === void 0 ? void 0 : data.message);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    React.useEffect(function () {
        getBotInfo();
        if (props.initialMessage) {
            setChats([
                {
                    message: props.initialMessage,
                    sender: "bot",
                }
            ]);
        }
    }, []);
    // outside click handler
    React.useEffect(function () {
        function handleClickOutside(event) {
            if (embedRef.current && !embedRef.current.contains(event.target)) {
                setShowChatBox(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [embedRef]);
    var sendMessage = function () { return __awaiter(_this, void 0, void 0, function () {
        var tempChats;
        return __generator(this, function (_a) {
            console.log("Sending message", message);
            console.log("Existing chats", chats);
            tempChats = __spreadArray([], chats, true);
            tempChats.push({ message: message, sender: "user" });
            tempChats.push({ message: "Loading...", sender: "bot" });
            console.log("Temp chats", tempChats);
            setChatsUpdater(message);
            // const oldLength = tempChats.length
            console.log("New chats", chats);
            return [2 /*return*/];
        });
    }); };
    React.useEffect(function () {
        if (chatsUpdater === null)
            return;
        var tempChats = __spreadArray([], chats, true);
        tempChats.push({ message: chatsUpdater, sender: "user" });
        tempChats.push({ message: "Loading...", sender: "bot" });
        setChats(tempChats);
    }, [chatsUpdater]);
    React.useEffect(function () {
        if (chatsUpdater === null)
            return;
        console.log("Sending msg", chatsUpdater);
        var url = "https://server.humanizeai.in/api/message-bot/".concat(props.apiKey, "/").concat(message);
        if ('EventSource' in window) {
            try {
                var source_1 = new EventSource(url, { withCredentials: false });
                source_1.addEventListener("open", function () {
                    console.log("Connection opened");
                });
                source_1.addEventListener("message", function (e) {
                    var _a;
                    console.log("Printing msgs");
                    var newData = JSON.parse(JSON.stringify(e.data));
                    console.log("NEW word", newData);
                    var newChats = __spreadArray([], chats, true);
                    if (((_a = newChats[newChats.length - 1]) === null || _a === void 0 ? void 0 : _a.message) === "Loading...") {
                        newChats[newChats.length - 1].message = newData;
                    }
                    else {
                        newChats[newChats.length - 1].message += newData;
                        setChats(newChats);
                        // console.log("New chats", newChats)
                        // console.log(newData);
                    }
                });
                source_1.addEventListener("error", function (e) {
                    console.log("Error");
                    console.log(e);
                    source_1.close();
                });
            }
            catch (e) {
                console.log("Today's API limit reached");
                console.log(e);
            }
        }
        else {
            console.log("EventSource not supported");
        }
    }, [chats.length]);
    var messageListRef = React.useRef(null);
    React.useEffect(function () {
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, [chats]);
    return (React.createElement("div", { className: props === null || props === void 0 ? void 0 : props.className, ref: embedRef, style: __assign(__assign({}, props === null || props === void 0 ? void 0 : props.style), { position: "fixed", bottom: ((_a = props === null || props === void 0 ? void 0 : props.autoposition) === null || _a === void 0 ? void 0 : _a.includes("bottom")) ? "25px" : undefined, top: ((_b = props === null || props === void 0 ? void 0 : props.autoposition) === null || _b === void 0 ? void 0 : _b.includes("top")) ? "25px" : undefined, right: ((_c = props === null || props === void 0 ? void 0 : props.autoposition) === null || _c === void 0 ? void 0 : _c.includes("right")) ? "30px" : undefined, left: ((_d = props === null || props === void 0 ? void 0 : props.autoposition) === null || _d === void 0 ? void 0 : _d.includes("left")) ? "30px" : undefined, zIndex: 9999 }) },
        React.createElement("div", { style: {
                width: "75px",
                height: "75px",
                borderRadius: "50%",
                backgroundColor: (_e = colors[props === null || props === void 0 ? void 0 : props.theme]) === null || _e === void 0 ? void 0 : _e.primary,
                color: (_f = colors[props === null || props === void 0 ? void 0 : props.theme]) === null || _f === void 0 ? void 0 : _f.secondary,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
                transition: "all 0.2s ease-in-out",
                transform: showChatBox ? "scale(0)" : "scale(1)",
                opacity: showChatBox ? 0 : 1,
            }, onClick: function () { return setShowChatBox(true); } },
            React.createElement(bs.BsRobot, { size: 40 })),
        React.createElement("div", { style: {
                width: "380px",
                height: "500px",
                borderRadius: "10px",
                backgroundColor: (_g = colors[props === null || props === void 0 ? void 0 : props.theme]) === null || _g === void 0 ? void 0 : _g.secondary,
                color: (_h = colors[props === null || props === void 0 ? void 0 : props.theme]) === null || _h === void 0 ? void 0 : _h.primary,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
                transition: "all 0.2s ease-in-out",
                transform: showChatBox ? "scale(1)" : "scale(0)",
                transformOrigin: "bottom right",
                opacity: showChatBox ? 1 : 0,
                position: "absolute",
                bottom: ((_j = props === null || props === void 0 ? void 0 : props.autoposition) === null || _j === void 0 ? void 0 : _j.includes("bottom")) ? "25px" : undefined,
                top: ((_k = props === null || props === void 0 ? void 0 : props.autoposition) === null || _k === void 0 ? void 0 : _k.includes("top")) ? "25px" : undefined,
                right: ((_l = props === null || props === void 0 ? void 0 : props.autoposition) === null || _l === void 0 ? void 0 : _l.includes("right")) ? "30px" : undefined,
                left: ((_m = props === null || props === void 0 ? void 0 : props.autoposition) === null || _m === void 0 ? void 0 : _m.includes("left")) ? "30px" : undefined,
                zIndex: 9999,
            } },
            React.createElement("div", { style: {
                    height: "fit-content",
                    padding: "12px",
                    borderRadius: "10px 10px 0px 0px",
                    backgroundColor: (_o = colors[props === null || props === void 0 ? void 0 : props.theme]) === null || _o === void 0 ? void 0 : _o.primary,
                    color: (_p = colors[props === null || props === void 0 ? void 0 : props.theme]) === null || _p === void 0 ? void 0 : _p.secondary,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                    zIndex: 9998,
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                } },
                profileImage ?
                    React.createElement("img", { src: profileImage.startsWith("https") ? profileImage : "https://server.humanizeai.in/assets/".concat(profileImage), alt: "Bot Image", style: {
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                        } })
                    :
                        React.createElement(bs.BsRobot, { size: 40 }),
                React.createElement("div", { style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        alignItems: "start",
                        marginRight: "auto"
                    } },
                    React.createElement("span", { style: {
                            fontWeight: "bold",
                            fontSize: "16px",
                        } }, title),
                    React.createElement("span", { style: {
                            fontSize: "12px",
                        } }, 
                    // having triple dots if description is too long
                    description.length > 50 ? "".concat(description.substring(0, 50), "...") : description)),
                React.createElement("div", { style: {
                        position: "absolute",
                        right: "10px",
                        top: "10px",
                        cursor: "pointer",
                        transition: "all 0.2s ease-in-out",
                        transform: showChatBox ? "scale(1)" : "scale(0)",
                        opacity: showChatBox ? 1 : 0,
                    }, onClick: function () { return setShowChatBox(false); } },
                    React.createElement(ai.AiFillCloseCircle, { size: 20, color: 'white' }))),
            React.createElement("div", { style: {
                    width: "100%",
                    maxWidth: "100%",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "10px",
                    marginTop: "72px",
                    marginBottom: "72px",
                    // paddingLeft: "12px",
                    // paddingRight: "12px",
                    overflowY: "auto",
                    zIndex: 9997,
                    position: "relative",
                }, ref: messageListRef }, chats.map(function (chat, index) {
                var _a;
                return React.createElement(Message, { key: index, message: chat.message, sender: chat.sender, primaryColor: (_a = colors[props === null || props === void 0 ? void 0 : props.theme]) === null || _a === void 0 ? void 0 : _a.primary });
            })),
            React.createElement("div", { style: {
                    height: "fit-content",
                    padding: "12px",
                    borderRadius: "0px 0px 10px 10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 9998,
                    backgroundColor: "#e4e4e4",
                } },
                React.createElement("input", { type: "text", placeholder: 'Ask me Something', value: message, onChange: function (e) { return setMessage(e.target.value); }, style: {
                        flexGrow: 1,
                        padding: "8px",
                        border: "none",
                        borderBottom: "1px solid ".concat((_q = colors[props === null || props === void 0 ? void 0 : props.theme]) === null || _q === void 0 ? void 0 : _q.primary),
                        outline: "none",
                        fontSize: "15px",
                        background: "transparent",
                    }, onKeyUp: function (e) {
                        if (e.key === "Enter") {
                            sendMessage();
                        }
                    } }),
                React.createElement("span", { style: {
                        fontWeight: "bold",
                        fontSize: "16px",
                    } },
                    React.createElement(tb.TbSend, { style: {
                            cursor: "pointer",
                            width: "20px",
                            height: "20px",
                            backgroundColor: (_r = colors[props === null || props === void 0 ? void 0 : props.theme]) === null || _r === void 0 ? void 0 : _r.primary,
                            color: (_s = colors[props === null || props === void 0 ? void 0 : props.theme]) === null || _s === void 0 ? void 0 : _s.secondary,
                            borderRadius: "50%",
                            padding: "10px",
                        }, onClick: sendMessage }))))));
}
var colors = {
    default: {
        primary: "#1f1f1f",
        secondary: "#f0f0f0",
        tertiary: "#F5F8FA",
    },
    blue: {
        primary: "#1F6ED4",
        secondary: "#FFFFFF",
        tertiary: "#F5F8FA",
    },
    red: {
        primary: "#E0245E",
        secondary: "#FFFFFF",
        tertiary: "#F5F8FA",
    },
    green: {
        primary: "#28A745",
        secondary: "#FFFFFF",
        tertiary: "#F5F8FA",
    },
    purple: {
        primary: "#6F42C1",
        secondary: "#FFFFFF",
        tertiary: "#F5F8FA",
    },
};
BotEmbed.defaultProps = {
    className: "",
    style: {},
    theme: "default",
    title: "Chatbot",
    autoposition: "bottom-right",
};
var Message = function (props) {
    return (React.createElement("div", { style: {
            padding: "8px",
            paddingLeft: "12px",
            paddingRight: "12px",
            borderRadius: "10px",
            borderBottomLeftRadius: props.sender === "bot" ? "0px" : "10px",
            borderBottomRightRadius: props.sender === "bot" ? "10px" : "0px",
            backgroundColor: props.sender === "bot" ? "#F5F8FA" : props.primaryColor,
            color: props.sender === "bot" ? "#1F1F1F" : "#FFFFFF",
            display: "flex",
            marginLeft: props.sender === "user" ? "auto" : "10px",
            marginRight: props.sender === "user" ? "10px" : "auto",
            justifyContent: "center",
            textAlign: "left",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            maxWidth: "65%",
            transitionDuration: "0.2s",
        } },
        React.createElement("span", { style: {
                fontWeight: "bold",
                fontSize: "16px",
            } }, props.sender === "bot" ? React.createElement(bs.BsRobot, { style: { width: 22, height: 22 } }) : "You"),
        React.createElement("span", { style: {
                fontSize: "15px",
            } }, props.message === "Loading..." ?
            React.createElement("div", { className: "lds-ellipsis" },
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null),
                React.createElement("div", null))
            :
                React.createElement("div", { dangerouslySetInnerHTML: { __html: props.message } }))));
};

exports.default = BotEmbed;
//# sourceMappingURL=BotEmbed.tsx.map
