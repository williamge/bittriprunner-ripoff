export default function BoundingGroup(boundingGroupName) {
    return function (target, name, descriptor) {
        descriptor.boundingGroup = boundingGroupName;
        return descriptor;
    }
}