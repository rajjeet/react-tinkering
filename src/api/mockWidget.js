export const widgets = [
    {
        id: '1',
        name: 'Widget 1',
        description: 'This widget is for display'
    },
    {
        id: '2',
        name: 'Widget 2',
        description: 'This widget is for play'
    },
    {
        id: '3',
        name: 'Widget 3',
        description: 'This widget is for storage'
    }
];


const generateId = () => Math.max.apply(Math, widgets.map(o => o.id)) + 1;

class WidgetApi {
    static getAllWidgets() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], widgets));
            }, 100);
        });
    }

    static saveWidget(widget){
        widget = Object.assign({}, widget);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (widget.name.length < 3){
                    reject(`Name of widget must be greater than 3 characters`);
                }

                if (widget.id){
                    const index = widgets.findIndex(w => w.id === widget.id);
                    widgets.splice(index, 1, widget);
                } else {
                    widget.id = generateId();
                    widgets.push(widget);
                }

                resolve(widget);
            }, 100);
        });
    }

    static deleteAuthor(widgetId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = widgets.findIndex(w => w.id === widgetId);
                widgets.splice(index, 1);
                resolve();
            }, 100);
        });
    }
}

export default WidgetApi;