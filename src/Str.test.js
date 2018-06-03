import test from 'ava';
import Str from './Str'; 

test('ucFirst', t => {
    t.is(Str.ucFirst('foo'), 'Foo'); 
}); 
test('lcFirst', t => {
    t.is(Str.lcFirst('Foo'), 'foo'); 
}); 
test('normalizePath', t => {
    t.is(Str.normalizePath('/foo/bar/'), '/foo/bar'); 
    t.is(Str.normalizePath('/foo//bar/'), '/foo/bar'); 
    t.is(Str.normalizePath('/foo////bar/'), '/foo/bar'); 
}); 
test('joinPath', t => {
    t.is(Str.joinPath('foo/', '/bar', 'baz'), '/foo/bar/baz'); 
}); 
test('removeTrailingSlash', t => {
    t.is(Str.removeTrailingSlash('/'), '/'); 
    t.is(Str.removeTrailingSlash('foo/'), 'foo'); 
    t.is(Str.removeTrailingSlash('foo/bar'), 'foo/bar'); 
}); 
test('removeLeadingSlash', t => {
    t.is(Str.removeLeadingSlash('/'), '/'); 
    t.is(Str.removeLeadingSlash('foo/bar'), 'foo/bar'); 
    t.is(Str.removeLeadingSlash('/foo/bar'), 'foo/bar'); 
    t.is(Str.removeLeadingSlash('//foo/bar'), 'foo/bar'); 
}); 
test('forceTrailingSlash', t => {
    t.is(Str.forceTrailingSlash('/'), '/'); 
    t.is(Str.forceTrailingSlash('foo/bar'), 'foo/bar/'); 
    t.is(Str.forceTrailingSlash('foo/bar/'), 'foo/bar/'); 
}); 
test('forceLeadingSlash', t => {
    t.is(Str.forceLeadingSlash('/'), '/'); 
    t.is(Str.forceLeadingSlash('foo/bar'), '/foo/bar'); 
    t.is(Str.forceLeadingSlash('/foo/bar'), '/foo/bar'); 
}); 
test('endsWith', t => {
    t.is(Str.endsWith('/foo/', '/'), true); 
    t.is(Str.endsWith('/foo/', '-'), false); 
    t.is(Str.endsWith('/foo', 'o'), true); 
    t.is(Str.endsWith('/foo', 'O'), false); 
}); 
test('startsWith', t => {
    t.is(Str.startsWith('/foo/', '/'), true); 
    t.is(Str.startsWith('/foo/', '-'), false); 
    t.is(Str.startsWith('foo', 'f'), true); 
    t.is(Str.startsWith('foo', 'F'), false); 
}); 
test('leftPad', t => {
    t.is(Str.leftPad(7, 3), '007');  
    t.is(Str.leftPad(17, 3), '017');  
    t.is(Str.leftPad(177, 3), '177');
    t.is(Str.leftPad('a', 3), '00a');
    t.is(Str.leftPad('a', 3, 'a'), 'aaa');
}); 