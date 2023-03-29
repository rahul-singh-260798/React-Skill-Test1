import React from "react";
import Key from "./Keys";

export default function KeyPad() {


    return (
        <section>
            <Key clear={true} />
            <Key value="MOD" color={false} />
            <Key value=" % " color={false} />
            <Key value=" / " color={true} />

            <Key value="7" color={false} />
            <Key value="8" color={false} />
            <Key value="9" color={false} />
            <Key value=" x " color={true} />

            <Key value="4" color={false} />
            <Key value="5" color={false} />
            <Key value="6" color={false} />
            <Key value=" - " color={true} />

            <Key value="1" color={false} />
            <Key value="2" color={false} />
            <Key value="3" color={false} />
            <Key value=" + " color={true} />

            <Key value="0" color={false} />
            <Key value="." color={false} />
            <Key del={true} />
            <Key equalTo={true} color={true} />

        </section>
    )
}