var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import { FieldArray } from 'formik';
import { get } from 'lodash';
import { IconButton, Button, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { getComponentConfig } from '../index';
/* interface IArrayItemProps extends TextFieldProps {
    fieldValue?: string
    formikProps?: FormikValues
    name?: string
    itemIndex?: number

} */
/* export const ArrayItem:React.FC<IArrayItemProps> = (props) => {
    const {fieldValue='',} = props;
    return (
        <div>
            <TextField/>
        </div>
    )
} */
export var MUIFieldArray = function (props) {
    var _a = props.formikProps, formikProps = _a === void 0 ? {} : _a, _b = props.fieldProps, fieldProps = _b === void 0 ? {} : _b;
    var itemType = fieldProps.itemType, _c = fieldProps.addButtonText, addButtonText = _c === void 0 ? 'Add' : _c, addButtonProps = fieldProps.addButtonProps, addButton = fieldProps.addButton, removeButton = fieldProps.removeButton, removeButtonProps = fieldProps.removeButtonProps, _d = fieldProps.textFieldProps, textFieldProps = _d === void 0 ? {} : _d, _e = fieldProps.defaultData, defaultData = _e === void 0 ? {} : _e;
    var values = get(formikProps, "values.".concat(fieldProps.name));
    var itemComponentConfig = getComponentConfig(itemType);
    return (React.createElement(FieldArray, { name: fieldProps.name, render: function (arrayHelpers) { return (React.createElement("div", null,
            (values || []).map(function (value, index) { return (React.createElement(Box, { key: "".concat(fieldProps.name, "-").concat(index), position: 'relative' },
                React.cloneElement(itemComponentConfig.component, __assign(__assign({ name: fieldProps.name, itemIndex: index, arrayHelpers: arrayHelpers, fieldValue: value, formikProps: formikProps }, itemComponentConfig.props), textFieldProps)),
                (removeButton) ? removeButton : (React.createElement(IconButton, __assign({ sx: {
                        position: 'absolute',
                        right: 0,
                        top: '50%',
                        transform: 'translate(0,-50%)'
                    }, size: "small", onClick: function () { return arrayHelpers.remove(index); } }, removeButtonProps),
                    React.createElement(CloseIcon, null))))); }),
            React.createElement("div", null, (addButton) ? addButton : (React.createElement(Button, __assign({ type: "button", onClick: function () { return arrayHelpers.push(defaultData); } }, addButtonProps), addButtonText))))); } }));
};
//# sourceMappingURL=MUIFieldArray.js.map