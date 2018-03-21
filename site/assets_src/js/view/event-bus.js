/**
 * Created by uforgot on 2017. 7. 20..
 */

import Vue from 'vue'
export const EventBus = new Vue();

EventBus.POINT_COLORS = ['#00d1b2', '#3272dc', '#1f9bee', '#22d15f', '#ff3860', '#ffdd56'];
EventBus.SCORES = [
    (Math.random() *20  + 5),
    (Math.random() *20  + 5),
    (Math.random() *20  + 5),
    (Math.random() *20  + 5),
    (Math.random() *20  + 5)
];
EventBus.DEFAULT_SCORE = 3;
